"use strict";
exports.__esModule = true;
exports.Pet = void 0;
var Pet = /** @class */ (function () {
    function Pet(id, name, age, pet, petBreed, ownerName, phone) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.pet = pet;
        this.petBreed = petBreed;
        this.ownerName = ownerName;
        this.phone = phone;
    }
    Pet.prototype.getId = function () { return this.id; };
    ;
    Pet.prototype.getName = function () { return this.name; };
    Pet.prototype.getAge = function () { return this.age; };
    Pet.prototype.getPet = function () { return this.pet; };
    Pet.prototype.getPetBreed = function () { return this.petBreed; };
    Pet.prototype.getOwnerName = function () { return this.ownerName; };
    Pet.prototype.getPhone = function () { return this.phone; };
    Pet.toPetModel = function (pet) {
        return new Pet(pet.id, pet.name, pet.age, pet.pet, pet.petBreed, pet.ownerName, pet.phone);
    };
    ;
    return Pet;
}());
exports.Pet = Pet;
;
;
