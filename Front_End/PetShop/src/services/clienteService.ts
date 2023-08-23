import api from "./api";

export interface Cliente {
    id: number,
    nome: string,
    numero_contato: string,
    endereco: string,
    nome_pet: string
}

export const createCliente = async (cliente: Cliente) => {
    const response = await api.post('/cliente', cliente);
    return response.data;
}

export const getCliente = async () => {
    const response = await api.get('/cliente');
    return response.data;
}

export const getClienteById = async (id: number) => {
    const response = await api.get(`/cliente/${id}`);
    return response.data;
}


export const updateCliente = async (cliente: Cliente) => {
    const response = await api.put(`/cliente/${cliente.id}`, cliente);
    return response.data;
}

export const deleteCliente = async (id: number) => {
    const response = await api.delete(`/cliente/${id}`);
    return response.data;
}

export const createOrUpdateCliente = async (cliente: Cliente) => {
    if(cliente.id ) {
        return await updateCliente(cliente);
    }else {
        return await createCliente(cliente);
    }
}