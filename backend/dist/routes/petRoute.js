"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.petRoute = void 0;
const express_1 = __importDefault(require("express"));
const PetController_1 = require("../controller/PetController");
exports.petRoute = express_1.default.Router();
exports.petRoute.get("/", new PetController_1.PetController().getPets);
exports.petRoute.post("/create", new PetController_1.PetController().registerPet);
exports.petRoute.put("/update/:id", new PetController_1.PetController().updatePet);
exports.petRoute.delete("/delete/:id", new PetController_1.PetController().deletePet);
