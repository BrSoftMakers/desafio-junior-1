import { Injectable } from "@nestjs/common";
import { GetPetById } from "../../domain/usecases";
import { Pet } from "../../domain/models";
import { PetRepository } from "../contracts";
import { RegisterNotFound } from "../../domain/errors/pet-not-found";

@Injectable()
export class GetPetByIdService implements GetPetById {
    constructor(private readonly petRepository: PetRepository) { }

    async execute (id: string): Promise<Pet> {
        const pet = await this.petRepository.getPetById(id);

        if(!pet) {
            throw new RegisterNotFound('pet')
        }

        return pet
    }
}