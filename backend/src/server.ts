import express from 'express';

import { router } from './routes';

const app = express();
const PORT = 3333 || process.env.PORT;

app.use('/', router)

app.listen(PORT, () => {
  console.log(`🔥[server]: Server is burning at port ${PORT}`);
});