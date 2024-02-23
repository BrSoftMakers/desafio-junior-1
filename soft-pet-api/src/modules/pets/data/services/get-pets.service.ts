<<<<<<< HEAD
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
=======
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
>>>>>>> d6cb25f2e463d04041c50124c6f9bccfec9946ab
}