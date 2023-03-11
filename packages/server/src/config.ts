import { config as dotenvConfig } from 'dotenv';

dotenvConfig()

// TODO: Add validation

export default {
  env: { ...process.env } as { NEO4J_URI: string, NEO4J_USER: string, NEO4J_PASSWORD: string } // TODO: Remove typecast
}