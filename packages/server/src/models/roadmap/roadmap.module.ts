import { Module } from '@nestjs/common';

import { RoadmapResolver } from './roadmap.resolver';
import { RoadmapService } from './roadmap.service';
import { GqlService } from '../../gql/gql.service';

@Module({
  providers: [RoadmapResolver, RoadmapService, GqlService],
  exports: [RoadmapResolver],
})
export class RoadmapModule {}
