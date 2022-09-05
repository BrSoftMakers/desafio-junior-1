import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export function getClients() {
    return api.get('/clients')
}

export function showClient(id) {
    return api.get(`/clients/${id}`)
}

export function createClient(data) {
    return api.post('/clients', data)
}

export function updateClient(id, data) {
    return api.put(`/clients/${id}`, data)
}

export function deleteClient(id) {
    return api.delete(`/clients/${id}`)
}

export function getPets(id) {
    return api.get(`/pets/client/${id}`)
}

export function showPet(id) {
    return api.get(`/pets/${id}`)
}

export function createPet(data) {
    return api.post('/pets', data)
}

export function updatePet(id, data) {
    return api.put(`/pets/${id}`, data)
}

export function deletePet(id) {
    return api.delete(`/pets/${id}`)
}

export default api