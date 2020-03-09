import './env';
import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import compression from 'compression';

import logger from './logger';

import { PORT, MONGO_URL } from './consts';

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .catch((error) => {
    logger.error('Mongo connection failed', error.message);
    process.exit(1);
  });

const app = express();
//app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'Hello there' });
});

// app.all('*', (_req, res, next) => {
//   res.status(404);
//   next(new Error('Not found.'));
// });

app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  logger.error(error.message, error.stack);
  res.status(res.statusCode === 200 ? 500 : res.statusCode);
  res.json({
    message: error.message,
  });
});

app.listen(PORT, () => logger.info(`App is running on ${PORT} port`));
