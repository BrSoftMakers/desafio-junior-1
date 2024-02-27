"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pet_entity_1 = require("./pet.entity");
let PetService = class PetService {
    constructor(petRepository) {
        this.petRepository = petRepository;
    }
    async findAll() {
        return this.petRepository.find();
    }
    async findById(id) {
        const options = {
            where: { id },
        };
        return this.petRepository.findOne(options);
    }
    async create(petData) {
        const pet = this.petRepository.create(petData);
        return this.petRepository.save(pet);
    }
    async update(id, petData) {
        const existingPet = await this.petRepository.findOne({ where: { id } });
        if (!existingPet) {
            return undefined;
        }
        const updatedPet = Object.assign(existingPet, petData);
        return this.petRepository.save(updatedPet);
    }
    async delete(id) {
        await this.petRepository.delete(id);
    }
};
exports.PetService = PetService;
exports.PetService = PetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pet_entity_1.Pet)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PetService);
//# sourceMappingURL=pet.service.js.map