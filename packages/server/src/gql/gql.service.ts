import { OGM } from '@neo4j/graphql-ogm';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import neo4j, { Driver } from 'neo4j-driver';

import { typeDefs } from './type-defs';
import { AppConfig } from '../common/types';
import { ModelMap } from '../ogm-types';

@Injectable()
export class GqlService {
  public ogm: OGM<ModelMap>;
  public driver: Driver;

  constructor(private readonly configService: ConfigService<AppConfig>) {
    // FIXME: Move to either a custom DB module or provider
    this.driver = neo4j.driver(
      configService.getOrThrow('NEO4J_URI'),
      neo4j.auth.basic(
        configService.getOrThrow('NEO4J_USER'),
        configService.getOrThrow('NEO4J_PASSWORD'),
      ),
    );
    this.ogm = new OGM<ModelMap>({ typeDefs, driver: this.driver });
    this.ogm.init();
  }
}
