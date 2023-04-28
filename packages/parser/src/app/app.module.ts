import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfig } from '../common/types';
import configuration from '../config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    ClientsModule.registerAsync([
      {
        name: 'COURSES_SERVICE',
        useFactory: (configService: ConfigService<AppConfig>) => ({
          transport: Transport.RMQ,
          options: {
            urls: [`${configService.getOrThrow('RABBITMQ_URL')}`],
            queue: configService.getOrThrow('COURSES_QUEUE'),
            queueOptions: {
              durable: false,
            },
            prefetchCount: 1,
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
