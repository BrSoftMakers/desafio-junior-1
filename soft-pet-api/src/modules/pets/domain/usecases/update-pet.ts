import { Pet, UpdatePetData } from "../models";

export abstract class UpdatePet {
    execute: (id:string, updatePetData: UpdatePetData) => Promise<Pet>
}