import './env';
import express from 'express';
import mongoose from 'mongoose';

import { PORT, MONGO_URL } from './consts';

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .catch((error) => {
    console.error('Mongo connection failed', error.message);
    process.exit(1);
  });

const app = express();

app.use(express.json());

app.get('/', (_req, res) => res.send('Hello there'));

app.listen(PORT, () => console.log(`App is running on ${PORT} port`));
