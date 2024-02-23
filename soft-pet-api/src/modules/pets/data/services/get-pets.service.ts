import { Injectable } from "@nestjs/common";
import { GetPets } from "../../domain/usecases";
import { PetRepository } from "../contracts";
import { Filter, Page } from "src/modules/chore/models";
import { Pet } from "../../domain/models";

@Injectable()
export class GetPetsService implements GetPets {
    constructor( private readonly petRepository: PetRepository ) { }

    async execute(filter: Filter): Promise<Page<Pet>> {
        const pets = await this.petRepository.getAllPets(filter);

        return pets;
    }
}