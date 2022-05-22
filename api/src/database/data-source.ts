import { DataSource } from "typeorm";

import { Pet } from "../entities/Pet";

import { createPets1652921682031 } from "./migrations";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "src/database/desafio-desenvolvedor-junior.sql",
  logging: true,

  entities: [Pet],
  migrations: [createPets1652921682031]
});

export const petRepository = AppDataSource.getRepository(Pet);
