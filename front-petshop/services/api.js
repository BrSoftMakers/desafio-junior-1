import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/pets',
});

export const fetchPets = async () => {
  const response = await api.get('/');
  return response.data;
};

export const fetchPet = async (id) => {
  const response = await api.get(`/${id}`);
  return response.data;
};

export const createPet = async (pet) => {
  const response = await api.post('/', pet);
  return response.data;
};

export const updatePet = async (id, pet) => {
  const response = await api.put(`/${id}`, pet);
  return response.data;
};

export const deletePet = async (id) => {
  await api.delete(`/${id}`);
};