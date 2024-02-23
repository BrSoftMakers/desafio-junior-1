import { Injectable } from "@nestjs/common";
import { RegisterNotFound } from "../../domain/errors/pet-not-found";
import { DeletePet } from "../../domain/usecases";
import { PetRepository } from "../contracts";

@Injectable()
export class DeletePetService implements DeletePet {
    constructor(private readonly petRepository: PetRepository) { }

    async execute(id: string): Promise<void> {
        const pet = await this.petRepository.getPetById(id);

        if(!pet) {
            throw new RegisterNotFound('pet')
        }

        console.log(pet);

        await this.petRepository.deletePet(id);
    }
}