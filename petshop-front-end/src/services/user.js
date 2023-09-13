import axios from 'axios';
import Cookies from 'js-cookie';

// Crie uma instância do Axios com a base URL definida para o seu servidor back-end.
const usersAPI = axios.create({ baseURL: 'http://localhost' }); // Substitua 'http://localhost:3000' pela URL correta do seu servidor.

// Intercepte as requisições e adicione o token de autenticação no header
usersAPI.interceptors.request.use((config) => {
    const token = Cookies.get('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

/**
 * Obtém a lista de usuários.
 * @returns {Promise<Array>} Uma promessa que é resolvida com a lista de usuários.
 */
async function getUsers() {
    try {
        const response = await usersAPI.get('/user');
        let dataUser;
        dataUser = response.data.dataUser;
        return dataUser;
    } catch (error) {
        console.error('Erro ao obter os usuários:', error);
        throw new Error('Erro ao obter os usuários');
    }
}

/**
 * Obtém os detalhes de um usuário específico.
 * @param {number} id O ID do usuário a ser obtido.
 * @returns {Promise<Object>} Uma promessa que é resolvida com os detalhes do usuário.
 */
async function getUser(id) {
    try {
        const response = await usersAPI.get(`/user/${id}`);
        let user;
        user = response.data;
        return user;
    } catch (error) {
        console.error(`Erro ao obter o usuário com o ID ${id}:`, error);
        throw new Error(`Erro ao obter o usuário com o ID ${id}`);
    }
}

/**
 * Cadastra um novo usuário.
 * @param {Object} user O objeto contendo os dados do usuário a ser cadastrado.
 * @returns {Promise<Object>} Uma promessa que é resolvida com o novo usuário cadastrado.
 */
async function postUsers(user) {
    try {
        const response = await usersAPI.post('/user', user);
        let newUser;
        newUser = response.data;
        return newUser;
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        throw new Error('Erro ao cadastrar usuário');
    }
}

/**
 * Atualiza um usuário existente.
 * @param {number} id O ID do usuário a ser atualizado.
 * @param {Object} user O objeto contendo os novos dados do usuário.
 * @returns {Promise<Object>} Uma promessa que é resolvida com o usuário atualizado.
 */
async function patchUsers(id, user) {
    try {
        const response = await usersAPI.patch(`/user/${id}`, user);
        let updatedUser;
        updatedUser = response.data;
        return updatedUser;
    } catch (error) {
        if (error.response && error.response.status === 403 || error.response.status === 401) {
            // Status 403 (Forbidden) - Usuário não tem permissão
            alert('Você não tem permissão para editar este usuário.');
        } else {
            console.error(`Erro ao atualizar o usuário com o ID ${id}:`, error);
            throw new Error(`Erro ao atualizar o usuário com o ID ${id}`);
        }
    }
}

/**
 * Exclui um usuário.
 * @param {number} id O ID do usuário a ser excluído.
 */
async function deleteUser(id) {
    try {
        await usersAPI.delete(`/user/${id}`);
    } catch (error) {
        console.error(`Erro ao excluir o usuário com o ID ${id}:`, error);
        throw new Error(`Erro ao excluir o usuário com o ID ${id}`);
    }
}

export { getUsers, getUser, postUsers, patchUsers, deleteUser };