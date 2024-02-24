import axios from "axios";

const base_Url = 'http://localhost:3000/pets';

export const getAllPets = async (page: number) => {
    try {
        const response = await axios.get(`${base_Url}?page=${page}`)
        return response.data
    } catch(error) {
        console.log('Get All Pets Service:', error);
    }
}