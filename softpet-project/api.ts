import { IPets } from './types/pets'

const BaseURL = "http://localhost:5000";

export const getAllPets = async (): Promise<IPets[]> => {
    const res = await fetch(`${BaseURL}/pets`);
    const pets = await res.json();
    return pets

}