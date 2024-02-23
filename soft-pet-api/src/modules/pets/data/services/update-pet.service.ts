<<<<<<< HEAD
import { Injectable } from "@nestjs/common";
import { UpdatePet } from "../../domain/usecases";
import { PetRepository } from "../contracts";
import { Pet, UpdatePetData } from "../../domain/models";
import { RegisterNotFound } from "../../domain/errors/pet-not-found";

@Injectable()
export class UpdatePetService implements UpdatePet {
    constructor(private readonly petRepository: PetRepository) {}

    async execute(id: string, updatePetData: UpdatePetData): Promise<Pet> {
        const pet = await this.petRepository.getPetById(id);

        if(!pet) {
            throw new RegisterNotFound('pet')
        }

        const updatedPet = await this.petRepository.updatePet(id, updatePetData);

        return updatedPet;
    }
=======
import { Injectable } from "@nestjs/common";
import { UpdatePet } from "../../domain/usecases";
import { PetRepository } from "../contracts";
import { Pet, UpdatePetData } from "../../domain/models";
import { RegisterNotFound } from "../../domain/errors/pet-not-found";

@Injectable()
export class UpdatePetService implements UpdatePet {
    constructor(private readonly petRepository: PetRepository) {}

    async execute(id: string, updatePetData: UpdatePetData): Promise<Pet> {
        const pet = await this.petRepository.getPetById(id);

        if(!pet) {
            throw new RegisterNotFound('pet')
        }

        const updatedPet = await this.petRepository.updatePet(id, updatePetData);

        return updatedPet;
    }
>>>>>>> d6cb25f2e463d04041c50124c6f9bccfec9946ab
}