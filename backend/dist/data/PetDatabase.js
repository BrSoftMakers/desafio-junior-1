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
exports.PetDatabase = void 0;
const BaseDatabase_1 = require("./base/BaseDatabase");
class PetDatabase extends BaseDatabase_1.BaseDatabase {
    registerPet(id, name, age, pet, petBreed, ownerName, phone) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .insert({
                    id,
                    name,
                    age,
                    pet,
                    pet_breed: petBreed,
                    owner_name: ownerName,
                    phone
                })
                    .into(this.tableNames.petshop);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    ;
    getAllPets() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .select('*')
                    .from(this.tableNames.petshop);
                return result;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    ;
    updatePet(id, name, age, pet, petBreed, ownerName, phone) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection().raw(`
                UPDATE ${this.tableNames.petshop}
                SET name = '${name}', 
                    age = ${age}, 
                    pet = '${pet}', 
                    pet_breed = '${petBreed}', 
                    owner_name = '${ownerName}', 
                    phone = '${phone}'
                WHERE id = '${id}'
            `);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    ;
    deletePet(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .del()
                    .from(this.tableNames.petshop)
                    .where({ id });
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    ;
}
exports.PetDatabase = PetDatabase;
;
