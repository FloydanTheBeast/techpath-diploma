import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { CreateRoadmapInput } from './gql-types';
import { RoadmapService } from './roadmap.service';
import { CurrentUser } from '../../common/decorators';
import { GqlAuthGuard } from '../../common/guards';
import { JwtPayload } from '../../common/types';

@Resolver()
export class RoadmapResolver {
  constructor(private readonly roadmapService: RoadmapService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  async createRoadmap(
    @CurrentUser() { id: userId }: JwtPayload,
    @Args('data') data: CreateRoadmapInput,
  ): Promise<boolean> {
    return Boolean(await this.roadmapService.createRoadmap(data, userId));
  }
}
