import { Injectable } from '@nestjs/common';

import { CreateRoadmapInput } from './gql-types';
import { GqlService } from '../../gql/gql.service';

@Injectable()
export class RoadmapService {
  constructor(private readonly gqlService: GqlService) {}

  async createRoadmap(data: CreateRoadmapInput, userId: string) {
    const session = this.gqlService.driver.session();

    const res = await session.run(
      `
      MERGE (rm:Roadmap { id: randomUUID() })
      SET rm.title = $data.title
      SET rm.description = $data.description
      SET rm.createdAt = datetime.realtime()

      WITH rm
      MATCH (u:User { id: $userId })
      MERGE (rm)-[:CREATED_BY]->(u)

      WITH $data.nodes AS nodes, rm
      FOREACH (n IN nodes | 
        CREATE (node:RoadmapNode { id: n.id })
        SET node.title = n.title
        SET node.description = n.description
        SET node.positionX = n.position.x
        SET node.positionY = n.position.y
        SET node.type = n.type
        FOREACH (sg IN n.suggestedCourses |
          MERGE (c:Course { id: sg.id })
          MERGE (node)-[:SUGGESTS_COURSE]->(c)
        )
      )
      
      WITH $data.nodes as nodes, rm
      MATCH (n:RoadmapNode { id: nodes[0].id })
      MERGE (rm)-[:CONSISTS_OF]->(n)
      
      WITH $data.edges AS edges, rm
      UNWIND edges AS edgeObj
      MATCH (n1:RoadmapNode { id: edgeObj.source })
      MATCH (n2:RoadmapNode { id: edgeObj.target })
      MERGE (n1)-[r:HAS_CHILD { id: edgeObj.id }]->(n2)
      RETURN rm
    `,
      {
        data,
        userId,
      },
    );

    await session.close();

    return res.records[0];
  }
}
