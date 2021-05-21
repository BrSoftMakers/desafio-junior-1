import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pets-backend.herokuapp.com'
})

export default api;