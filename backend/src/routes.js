const express = require("express");

//Controllers
const UserController = require("./controllers/UserController");
const PetController = require("./controllers/PetController");
const RaceController = require("./controllers/RaceController");

const routes = express.Router();

//Users
routes.get("/users", UserController.index);
routes.get("/user/:user_id", UserController.show);
routes.post("/users", UserController.store);
routes.put("/user/:user_id", UserController.update);
routes.delete("/user/:user_id", UserController.delete);

//Pets
routes.get("/pets", PetController.index);
routes.post("/user/:user_id/pets", PetController.store);
routes.put("/user/:user_id/pet/:pet_id", PetController.update);
routes.delete("/user/:user_id/pet/:pet_id", PetController.delete);

//Races
routes.get("/races", RaceController.index);
routes.post("/races", RaceController.store);
routes.put("/race/:race_id", RaceController.update);
routes.delete("/race/:race_id", RaceController.delete);

module.exports = routes;
