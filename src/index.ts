import express from 'express';

import './database';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3301, () => console.log('server running 3301'));
