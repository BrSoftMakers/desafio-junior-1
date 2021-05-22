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
exports.PetBusiness = void 0;
class PetBusiness {
    constructor(petDatabase, idGenerator) {
        this.petDatabase = petDatabase;
        this.idGenerator = idGenerator;
    }
    registerPet(pet) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!pet.name || !pet.age || !pet.pet || !pet.petBreed || !pet.ownerName || !pet.phone) {
                throw new Error("Por favor, preencha todos os campos");
            }
            ;
            const id = this.idGenerator.generate();
            yield this.petDatabase.registerPet(id, pet.name, pet.age, pet.pet, pet.petBreed, pet.ownerName, pet.phone);
        });
    }
    ;
    getAllPet() {
        return __awaiter(this, void 0, void 0, function* () {
            const pets = yield this.petDatabase.getAllPets();
            return pets;
        });
    }
    ;
    updatePet(id, pet) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!pet.name ||
                !pet.age ||
                !pet.pet ||
                !pet.petBreed ||
                !pet.ownerName ||
                !pet.phone) {
                throw new Error("Por favor, preencha todos os campos");
            }
            ;
            yield this.petDatabase.updatePet(id, pet.name, pet.age, pet.pet, pet.petBreed, pet.ownerName, pet.phone);
        });
    }
    ;
    deletePet(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.petDatabase.deletePet(id);
        });
    }
    ;
}
exports.PetBusiness = PetBusiness;
;
