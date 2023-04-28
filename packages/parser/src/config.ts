import { ConfigFactory } from '@nestjs/config';

import type { AppConfig } from './common/types';

const configuration: ConfigFactory<AppConfig> = () => {
  return {
    RABBITMQ_URL: process.env.RABBITMQ_URL,
    COURSES_QUEUE: process.env.COURSES_QUEUE,
  };
};

export default configuration;
