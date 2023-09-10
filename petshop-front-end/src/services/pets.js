import axios from 'axios';
import Cookies from 'js-cookie';

// Crie uma instância do Axios com a base URL definida para o servidor onde sua API de pets está hospedada
const petsAPI = axios.create({ baseURL: 'http://localhost/' });

// Intercepte as requisições e adicione o token de autenticação no header, se necessário
petsAPI.interceptors.request.use((config) => {
    const token = Cookies.get('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

/**
 * Obtém a lista de pets.
 * @returns {Promise<Array>} Uma promessa que é resolvida com a lista de pets.
 */
async function getPets() {
    try {
        const response = await petsAPI.get('/pet');
        let pets;
        pets = response.data.pets;
        return pets;
    } catch (error) {
        console.error('Erro ao obter os pets:', error);
        throw new Error('Erro ao obter os pets');
    }
}

/**
 * Obtém os detalhes de um pet específico.
 * @param {number} id O ID do pet a ser obtido.
 * @returns {Promise<Object>} Uma promessa que é resolvida com os detalhes do pet.
 */
async function getPet(id) {
    try {
        const response = await petsAPI.get(`/pet/${id}`);
        let pet;
        pet = response.data;
        return pet;
    } catch (error) {
        console.error(`Erro ao obter o pet com o ID ${id}:`, error);
        throw new Error(`Erro ao obter o pet com o ID ${id}`);
    }
}

/**
 * Cadastra um novo pet.
 * @param {Object} pet O objeto contendo os dados do pet a ser cadastrado.
 * @returns {Promise<Object>} Uma promessa que é resolvida com o novo pet cadastrado.
 */
async function postPet(pet) {
    try {
        const response = await petsAPI.post('/pet/', pet);
        let newPet;
        newPet = response.data;
        return newPet;
    } catch (error) {
        console.error('Erro ao cadastrar pet:', error);
        throw new Error('Erro ao cadastrar pet');
    }
}

/**
 * Atualiza um pet existente.
 * @param {number} id O ID do pet a ser atualizado.
 * @param {Object} pet O objeto contendo os novos dados do pet.
 * @returns {Promise<Object>} Uma promessa que é resolvida com o pet atualizado.
 */
async function patchPet(id, pet) {
    try {
        const response = await petsAPI.patch(`/pet/${id}`, pet);
        let updatedPet;
        updatedPet = response.data;
        return updatedPet;
    } catch (error) {
        console.error(`Erro ao atualizar o pet com o ID ${id}:`, error);
        throw new Error(`Erro ao atualizar o pet com o ID ${id}`);
    }
}

/**
 * Exclui um pet.
 * @param {number} id O ID do pet a ser excluído.
 */
async function deletePet(id) {
    try {
        await petsAPI.delete(`/pet/${id}`);
    } catch (error) {
        console.error(`Erro ao excluir o pet com o ID ${id}:`, error);
        throw new Error(`Erro ao excluir o pet com o ID ${id}`);
    }
}

export { getPets, getPet, postPet, patchPet, deletePet };