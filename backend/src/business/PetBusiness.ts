import { IdGenerator } from "../services/idGenerator";
import { PetDatabase } from "../data/PetDatabase";
import { Pet, PetInputDTO } from '../model/Pet';

export class PetBusiness {
    constructor (
        private petDatabase: PetDatabase,
        private idGenerator: IdGenerator
    ) {}
    
	public async registerPet(pet: PetInputDTO): Promise<void> {
		if (!pet.name || !pet.age || !pet.pet || !pet.petBreed || !pet.ownerName || !pet.phone) {
			throw new Error("Por favor, preencha todos os campos");
        };
        
        const id = this.idGenerator.generate();

		await this.petDatabase.registerPet (
            id, 
            pet.name,
            pet.age, 
            pet.pet,
            pet.petBreed,
            pet.ownerName,
            pet.phone
        );
    };

    public async getAllPet(): Promise<Pet[]> {
        const pets = await this.petDatabase.getAllPets();

        return pets;
    };

    public async updatePet(id: string, pet: PetInputDTO): Promise<void> {
        if (
            !pet.name || 
            !pet.age || 
            !pet.pet || 
            !pet.petBreed || 
            !pet.ownerName || 
            !pet.phone
        ) {
			throw new Error("Por favor, preencha todos os campos");
        };

        await this.petDatabase.updatePet (
            id, 
            pet.name,
            pet.age,
            pet.pet,
            pet.petBreed,
            pet.ownerName,
            pet.phone
        );
    };

    public async deletePet(id: string): Promise<void> {
        await this.petDatabase.deletePet(id);
    };
};
