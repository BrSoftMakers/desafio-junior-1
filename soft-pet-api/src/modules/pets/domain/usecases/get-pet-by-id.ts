import { Pet } from "../models/pet";

export abstract class GetPetById {
    execute: (id: string) => Promise<Pet>
}