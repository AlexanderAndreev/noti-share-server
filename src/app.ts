import * as express from 'express';

const app = express();

app.get('/', (_req, res) => res.send('Hello there'));

app.listen(3000, () => console.log('App is running on 3000 port'));
