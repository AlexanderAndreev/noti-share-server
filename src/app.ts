import './env';
import express from 'express';

import { PORT } from './consts';

const app = express();

app.get('/', (_req, res) => res.send('Hello there'));

app.listen(PORT, () => console.log(`App is running on ${PORT} port`));
