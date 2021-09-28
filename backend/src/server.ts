import express from 'express';
import { Request, Response } from 'express'

const app = express();
const PORT = 3333 || process.env.PORT;

app.get('/', (req: Request, res: Response) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
  console.log(`🔥[server]: Server is burning at https://localhost:${PORT}`);
});