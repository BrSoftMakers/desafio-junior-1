import express from "express";
import cors from "cors";
import chalk from "chalk";

import db from "./db";

import routes from "./routes";

class App {
  constructor() {
    this.app = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    db.defaults({ pets: [] }).write();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(routes);
  }

  init() {
    this.app.listen(3333, () => {
      console.log(
        chalk.cyan(
          "\n",
          "Servidor iniciado na porta 3333 🚀",
          "\n",
          "Acesse agora: http://localhost:3333"
        )
      );
    });
  }
}

export default new App();
