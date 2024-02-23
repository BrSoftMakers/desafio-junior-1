<<<<<<< HEAD
import { Pet, UpdatePetData } from "../models";

export abstract class UpdatePet {
    execute: (id:string, updatePetData: UpdatePetData) => Promise<Pet>
=======
import { Pet, UpdatePetData } from "../models";

export abstract class UpdatePet {
    execute: (id:string, updatePetData: UpdatePetData) => Promise<Pet>
>>>>>>> d6cb25f2e463d04041c50124c6f9bccfec9946ab
}