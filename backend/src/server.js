const express = require("express");
const routes = require("./routes");
const app = express();
require("./database");

app.use(express.json());
app.use(routes);

app.listen(8080);
