import axios from 'axios';

interface PetRegisterInterface {
  namePet: string;
  agePet: number;
  weightPet: number;
  animalPet: string;
  breedPet: string;
  nameProperty: string;
  telephoneProperty: string;
  emailProperty?: string;
  addressProperty: string;
  districtProperty: string;
  cityProperty: string;
  ufProperty: string;
}

export async function createPet(o: any): Promise<any> {
  try {
    const response = await axios.post('http://localhost:3333/pets', o);
    return response.data;
  } catch (err) {
    throw new Error(err as string);
  }
}

export function getPets() {
  return axios.get('http://localhost:3333/pets').then(res => res.data);
}

export async function deletePet(id: number) {
  axios.delete(`http://localhost:3333/pets/${id}`);
}

export async function putPet(id: number, o: any) {
  axios.put(`http://localhost:3333/pets/${id}`, o);
}
