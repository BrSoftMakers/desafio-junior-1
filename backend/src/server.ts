import 'reflect-metadata';

import express from 'express';
import cors from "cors"

import { router } from './routes';

const app = express();

app.use(express.json())
app.use(cors())

const PORT = 3333 || process.env.PORT;

app.use('/', router)

app.listen(PORT, () => {
  console.log(`🔥[server]: Server is burning at port ${PORT}`);
});