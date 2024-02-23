import { CreatePetData } from "../models";

export abstract class CreatePet {
    execute: (createPetData: CreatePetData) => Promise<void>
}