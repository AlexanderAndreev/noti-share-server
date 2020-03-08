import { config } from 'dotenv';

const result = config();

!result.error &&
  Object.entries(result.parsed!)
    .filter(([_key, value]) => value)
    .forEach(([key, value]) => (process.env[key] = value));
