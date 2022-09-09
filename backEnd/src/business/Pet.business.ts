import PetDatabase from "../database/PetDatabase";
import { CustomError } from "../error/CustomError";
import { Pet } from "../models/Pet";
import { AnimalType, IAnimal } from "../services/types";

export class PetBusiness {

    constructor(private petDatabase: PetDatabase) { }

    async create(pet: IAnimal): Promise<void> {
        const { name, age, type, breed, id_User} = pet
        console.log(id_User)
        if (!name || !age || !type || !breed) {
            throw new CustomError("Todos os campos precisam ser preenchidos.", 422)
        }

        if (![AnimalType.CAT, AnimalType.DOG].includes(type)) {
            throw new CustomError("Não trabalhamos com o tipo de animal fornecido", 400)
        }

        const newPet = new Pet(
            name,
            age,
            type,
            breed,
            id_User
        )
        
        await this.petDatabase.create(newPet)

        // PetDatabase.destroyConnection()
    }

    async getAllPets(): Promise<IAnimal[]> {
        const result = await this.petDatabase.getPet()

        if (!result.length) {
            throw new CustomError("Nenhum pet foi encontrado/cadastrado em nosso sistema.", 404)
        }

        return result
    }

    async getPetById(id: string): Promise<IAnimal> {
        const findPetById = await this.petDatabase.getPetById(id)

        if (!findPetById.length) {
            throw new CustomError("Pet não encontrado", 404)
        }

        return findPetById[0]
    }

    async deletePetById(id: string): Promise<number> {
        const findPet = await this.petDatabase.getPetById(id)

        if (!findPet.length) {
            throw new CustomError("Pet não encontrado", 404)
        }

        return await this.petDatabase.deletePetById(id)
    }

}