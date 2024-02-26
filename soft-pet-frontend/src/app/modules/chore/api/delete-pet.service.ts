import axios from "axios";
import { PetData } from "../models/create-pet";

const base_Url = 'http://localhost:3000/pets';

export const deletePet = async (pet: PetData) => {
    try {
        await axios.delete(`${base_Url}/${pet.id}`)
    } catch(error) {
        console.log('Create Pet Fail:', error);
    }
}