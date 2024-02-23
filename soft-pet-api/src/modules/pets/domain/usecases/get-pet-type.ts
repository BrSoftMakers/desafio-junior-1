import { PetType } from "../models";

export abstract class GetPetType {
    execute: (type: string) => Promise<PetType>
}