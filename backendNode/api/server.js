const express = require("express");
const routes = require("./routes");

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

app.listen(port, () => console.log(`servidor no ar na porta ${port}`));

module.exports = app;
