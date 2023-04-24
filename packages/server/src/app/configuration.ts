import { ConfigFactory } from '@nestjs/config';

import type { AppConfig } from '../common/types';

const configuration: ConfigFactory<AppConfig> = () => {
  return {
    NEO4J_URI: process.env.NEO4J_URI,
    NEO4J_AUTH: process.env.NEO4J_AUTH,
    NEO4J_USER: process.env.NEO4J_USER,
    NEO4J_PASSWORD: process.env.NEO4J_PASSWORD,
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  };
};

export default configuration;
