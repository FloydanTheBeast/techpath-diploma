import type { AppConfig } from './config';

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ProcessEnv extends AppConfig {}
  }
}
