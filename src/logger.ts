import winston from 'winston';
import { IS_DEV } from './consts';

const logger = winston.createLogger({
  format: winston.format.simple(),
  level: IS_DEV ? 'debug' : 'info',
  transports: [new winston.transports.Console()],
});

export default logger;
