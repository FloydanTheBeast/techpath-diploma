import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './configuration';
import { IS_PRODUCTION } from '../common/constants/misc';
import { GqlModule } from '../gql';
import { RoadmapModule, UserModule } from '../models';

const delayMiddleware = (_req: Request, _res: Response, next: () => void) => setTimeout(next, 350);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    UserModule,
    RoadmapModule,
    GqlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    !IS_PRODUCTION && consumer.apply(delayMiddleware).forRoutes('*');
  }
}
