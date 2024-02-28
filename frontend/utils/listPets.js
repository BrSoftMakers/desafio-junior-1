import axiosInstance from './axiosConfig';

const listPets = async () => {
  try {
    const response = await axiosInstance.get('/pets');
    return response.data;
  } catch (error) {
    console.error('Error fetching pets:', error);
    return []; 
  }
};

export default listPets;