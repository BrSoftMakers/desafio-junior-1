"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetController = void 0;
const BaseDatabase_1 = require("../data/base/BaseDatabase");
const PetBusiness_1 = require("../business/PetBusiness");
const PetDatabase_1 = require("../data/PetDatabase");
const idGenerator_1 = require("../services/idGenerator");
class PetController {
    registerPet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    name: req.body.name,
                    age: req.body.age,
                    pet: req.body.pet,
                    petBreed: req.body.petBreed,
                    ownerName: req.body.ownerName,
                    phone: req.body.phone
                };
                yield PetController.PetBusiness.registerPet(input);
                res.status(200).send({ message: "Pet cadastrado!" });
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield BaseDatabase_1.BaseDatabase.destroyConnection();
        });
    }
    ;
    getPets(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pets = yield PetController.PetBusiness.getAllPet();
                res.status(200).send({
                    pets
                });
            }
            catch (error) {
                res.status(400).send({
                    error: error.sqlMessage || error.message
                });
            }
            yield BaseDatabase_1.BaseDatabase.destroyConnection();
        });
    }
    ;
    updatePet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const input = {
                    name: req.body.name,
                    age: req.body.age,
                    pet: req.body.pet,
                    petBreed: req.body.petBreed,
                    ownerName: req.body.ownerName,
                    phone: req.body.phone
                };
                yield PetController.PetBusiness.updatePet(id, input);
                res.status(200).send({ message: "Pet atualizado!" });
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield BaseDatabase_1.BaseDatabase.destroyConnection();
        });
    }
    ;
    deletePet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield PetController.PetBusiness.deletePet(id);
                res.status(200).send({ message: "Pet excluído!" });
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield BaseDatabase_1.BaseDatabase.destroyConnection();
        });
    }
    ;
}
exports.PetController = PetController;
PetController.PetBusiness = new PetBusiness_1.PetBusiness(new PetDatabase_1.PetDatabase(), new idGenerator_1.IdGenerator());
;
