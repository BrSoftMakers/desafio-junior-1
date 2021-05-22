"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
class Pet {
    constructor(id, name, age, pet, petBreed, ownerName, phone) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.pet = pet;
        this.petBreed = petBreed;
        this.ownerName = ownerName;
        this.phone = phone;
    }
    getId() { return this.id; }
    ;
    getName() { return this.name; }
    getAge() { return this.age; }
    getPet() { return this.pet; }
    getPetBreed() { return this.petBreed; }
    getOwnerName() { return this.ownerName; }
    getPhone() { return this.phone; }
    static toPetModel(pet) {
        return new Pet(pet.id, pet.name, pet.age, pet.pet, pet.petBreed, pet.ownerName, pet.phone);
    }
    ;
}
exports.Pet = Pet;
;
;
