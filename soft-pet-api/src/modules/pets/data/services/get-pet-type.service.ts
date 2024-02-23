import { Injectable } from "@nestjs/common";
import { GetPetType } from "../../domain/usecases";
import { PetTypeRepository } from "../contracts/pet-type-repository";
import { PetType } from "../../domain/models";
import { RegisterNotFound } from "../../domain/errors/pet-not-found";

@Injectable()
export class GetPetTypeService implements GetPetType {
    constructor(private readonly petTypeRepository: PetTypeRepository) { }

    async execute(type: string): Promise<PetType> {
        const petType = await this.petTypeRepository.getPetType(type)

        if(!petType) {
            throw new RegisterNotFound('tipo de pet')
        }

        return petType;
    }
}