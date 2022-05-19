import { DataSource } from "typeorm";

import { Dog } from "../entities/Dog";

import { createAnimals1652921682031 } from "./migrations";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "src/database/desafio-desenvolvedor-junior.sql",
  logging: true,

  entities: [Dog],
  migrations: [createAnimals1652921682031]
});

export const dogRepository = AppDataSource.getRepository(Dog);
