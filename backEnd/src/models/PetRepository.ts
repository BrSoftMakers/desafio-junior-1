import { IAnimal } from "../services";
import { Pet } from "./Pet";

export interface PetRepository {
    create(pet: Pet): Promise<void>
    getPet(): Promise<IAnimal[]>
    getPetById(id: string): Promise<IAnimal[]>
    deletePetById(id: string): Promise<number>
}