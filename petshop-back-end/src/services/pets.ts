import Pet from '../models/Pet';
import User from '../models/User';
import Address from '../models/Address';

async function listPets(): Promise<Pet[]> {
    return Pet.findAll();
}

async function getPetById(id: number): Promise<Pet | null> {
    return Pet.findByPk(id, {
        include: [{ model: User, as: 'owner' }],
    });
}

// @ts-ignore
async function createPet(petData: PetAttributes): Promise<Pet> {
    return Pet.create(petData);
}

// @ts-ignore
async function updatePet(id: number, petData: PetAttributes): Promise<[number, Pet[]]> {
    // @ts-ignore
    return Pet.update(petData, {
        where: { id },
    });
}

async function deletePet(id: number): Promise<number> {
    return Pet.destroy({
        where: { id },
    });
}

export { listPets, getPetById, createPet, updatePet, deletePet };