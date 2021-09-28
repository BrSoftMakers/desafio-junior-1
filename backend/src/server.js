const express = require('express');
const app = express();
const PORT = 3333 | process.env.PORT;

app.get('/', (req,res) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});