import { DataSource } from "typeorm";

import { Dog } from "../entities/Dog";

import { createPets1652921682031 } from "./migrations";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "src/database/desafio-desenvolvedor-junior.sql",
  logging: true,

  entities: [Dog],
  migrations: [createPets1652921682031]
});

export const dogRepository = AppDataSource.getRepository(Dog);
