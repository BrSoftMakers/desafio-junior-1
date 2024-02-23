import { Injectable } from "@nestjs/common";
import { CreatePet } from "../../domain/usecases";
import { PetRepository, PetTypeRepository } from "../contracts";
import { CreatePetData } from "../../domain/models";
import { RegisterNotFound } from "../../domain/errors/pet-not-found";

@Injectable()
export class CreatePetService implements CreatePet {
    constructor(
        private readonly petRepository: PetRepository,
        private readonly petTypeRepository: PetTypeRepository    
    ) {}

    async execute(createPetData: CreatePetData): Promise<void> {
        const petType = await this.petTypeRepository.getPetType(createPetData.petType);

        if(!petType) {
            throw new RegisterNotFound('tipo de pet')
        }

        await this.petRepository.create(createPetData);
    }
}