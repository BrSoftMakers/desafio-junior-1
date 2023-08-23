import api from "./api";


export interface Pet {
    id: number,
    nome: string,
    idade: number,
    tipo: string,
    raca: string
}

export const createPet = async (pet: Pet) => {
    const response = await api.post('/pet', pet);
    return response.data;
}

export const getPet = async () => {
    const response = await api.get('/pet');
    return response.data;
}

export const getPetById = async (id: number) => {
    const response = await api.get(`/pet/${id}`);
    return response.data;
}


export const updatePet = async (pet: Pet) => {
    const response = await api.put(`/pet/${pet.id}`, pet);
    return response.data;
}

export const deletePet = async (id: number) => {
    const response = await api.delete(`/pet/${id}`);
    return response.data;
}

export const createOrUpdatePet = async (pet: Pet) => {
    if (pet.id
        ) {
        return await updatePet(pet);
    } else {
        return await createPet(pet);
    }
}