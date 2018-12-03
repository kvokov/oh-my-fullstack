import winston from 'winston';
import fs from 'fs';
import { IS_PROD, IS_DEV, IS_TEST } from '../config';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json(),
  ),
});

if (IS_PROD) {
  logger.add(new winston.transports.File({ filename: '_logs/error.log', level: 'error' }));
} if (IS_DEV) {
  logger.add(new winston.transports.Console({ format: winston.format.simple() }));
} else if (IS_TEST) {
  logger.add(new winston.transports.Stream({ stream: fs.createWriteStream('/dev/null') }));
}

export default logger;
