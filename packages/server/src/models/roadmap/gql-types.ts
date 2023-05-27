import { Field, InputType, ID } from '@nestjs/graphql';
import { Difficulty } from '@shared/graphql';

@InputType()
export class RoadmapEdgeInput {
  @Field(() => ID)
  id: string;
  @Field()
  source: string;
  @Field()
  target: string;
  @Field({ nullable: true })
  targetHandle: string;
}

@InputType()
export class RoadmapNodePositionInput {
  @Field()
  x: number;
  @Field()
  y: number;
}

@InputType()
export class RoadmapNodeSuggestedCourseInput {
  @Field()
  id: string;
}

@InputType()
export class RoadmapNodeInput {
  @Field(() => ID)
  id: string;
  @Field()
  title: string;
  @Field({ nullable: true })
  description: string;
  @Field()
  position: RoadmapNodePositionInput;
  @Field()
  type: string;
  @Field(() => [RoadmapNodeSuggestedCourseInput], { nullable: true })
  suggestedCourses: [RoadmapNodeSuggestedCourseInput];
}

@InputType()
export class CreateRoadmapInput {
  @Field()
  title: string;
  @Field({ nullable: true })
  description: string;
  @Field(() => [RoadmapNodeInput])
  nodes: RoadmapNodeInput[];
  @Field(() => [RoadmapEdgeInput])
  edges: RoadmapEdgeInput[];
  @Field(() => String)
  difficulty: Difficulty;
  @Field(() => String)
  countryCodeISO: string;
  @Field(() => [String], { nullable: true })
  tagsIds?: string[];
}
