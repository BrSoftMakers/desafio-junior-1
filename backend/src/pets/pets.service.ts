import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Pet } from "./entities/pet.entity";
import { Repository } from "typeorm";
import { PetDto } from "./dto/pet.dto";
import { UpdatePetDto } from "./dto/update_pet.dto";

@Injectable()
export class PetsService {
    constructor(
        @InjectRepository(Pet)
        private petRepository: Repository<Pet>,
    ) { }

    async searchById(id: string): Promise<Pet | Error> {
        const pet= await this.petRepository.findOne({
            where: {
                id: id,
            }
        })

        if (!pet) throw new NotFoundException('Pet not founded')

        return pet
    }

    async findAllPets(): Promise<Pet[]> {
        const pets = await this.petRepository.find()
        return pets
    }
    
    async create(createPet: PetDto): Promise<Pet> {
        const pet = this.petRepository.create(createPet);
        return this.petRepository.save(pet);
    }

    async delete(id: string): Promise<{ message: string }> {
        const pet = await this.searchById(id);

        if (!pet) throw new NotFoundException('Pet not founded')
        await this.petRepository.delete(id)
        
        return { message: 'Pet deleted successful'}
    }

    async update(id: string, newData: UpdatePetDto): Promise<Pet> {
        const pet = await this.searchById(id);

        Object.assign(pet, newData)
        return this.petRepository.save(pet)
    }
}