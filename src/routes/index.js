import { Router, static } from "express";
import path from "path";

import PetController from "../controllers/Pet";

const routes = Router();

// Disponibilizando todos os arquivos do build (React):

routes.use(static(path.resolve(__dirname, "..", "..", "client", "build")));

// Definindo as rotas da API:

routes.get("/api/pets", PetController.index);
routes.get("/api/pet/:id", PetController.show);
routes.post("/api/pets", PetController.store);
routes.put("/api/pet/:id", PetController.update);
routes.delete("/api/pet/:id", PetController.destroy);

// Definindo a rota para acessar o app:

routes.get("*", (_req, res) => {
  res.sendFile(
    path.resolve(__dirname, "..", "..", "client", "build", "index.html")
  );
});

export default routes;
