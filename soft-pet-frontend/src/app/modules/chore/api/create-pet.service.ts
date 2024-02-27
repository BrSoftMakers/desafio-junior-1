import axios from "axios";
import { PetData } from "../models/create-pet";

const base_Url = 'http://localhost:3000/pets';

export const createPet = async (pet: PetData) => {
    try {
        await axios.post(base_Url, pet)
    } catch(error) {
        console.log('Create Pet Fail:', error);
    }

}