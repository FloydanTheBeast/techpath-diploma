import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app/app.module';
import { AppConfig } from './common/types';

async function bootstrap() {
  const configService = new ConfigService<AppConfig>();

  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: [`${configService.get('RABBITMQ_URL')}`],
  //     queue: configService.get('COURSES_TO_PROCESS_QUEUE'),
  //     queueOptions: {
  //       durable: false,
  //     },
  //     prefetchCount: 1,
  //   },
  // });

  const app = await NestFactory.create(AppModule);

  await app.listen(3001);
  Logger.log(`🚀 Parser service started successfully on port 3001`);
}

bootstrap();
