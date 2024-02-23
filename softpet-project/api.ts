import { IPets } from './types/pets';


const BaseURL = "http://localhost:5000";

export const getAllPets = async (): Promise<IPets[]> => {
    const res = await fetch(`${BaseURL}/pets`,{cache:'no-store'});
    const pets = await res.json();
    return pets
}
export const addPets = async(pet:IPets):Promise<IPets> =>{
    const res = await fetch(`${BaseURL}/pets`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(pet)
    });
    const newPet = await res.json();
    return newPet
}