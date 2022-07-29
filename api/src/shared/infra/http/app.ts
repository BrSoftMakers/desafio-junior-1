import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import { routes } from './routes';

import '../../container';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

export { app }