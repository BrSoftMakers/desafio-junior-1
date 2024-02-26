import { error } from 'console';
import { ICreatedClient } from './../app/types/IClients';
const URL_API = "http://localhost:3001/client"

const getAllClients = async () => {
  try {
    const response = await fetch(URL_API);
    const data = response.json();
    return data;
  } catch (err) {
    console.error('Erro ao obter os dados de:', err)
    throw Error
  }
}

const createClient = async (dataCLient: ICreatedClient) => {
  try {
    const response = await fetch(URL_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataCLient)
    })
  
    if (!response.ok) {
      throw new Error("Falha ao ao criar o Cliente")
    }
  
    const dataCreated = await response.json();
    return dataCreated
  } catch (err) {
    console.error("Erro ao criar novos dados:", err);
    throw error
  }
}

const updateClient = async (id: number, ownerId: number, clientData: ICreatedClient) => {
  try {
    const response = await fetch(`${URL_API}/${id}/${ownerId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(clientData)
    });

    if (!response.ok) {
      throw new Error('Falha ao atualizar dados');
    }

    const updatedClient = await response.json();
    return updatedClient;
  } catch (err) {
    console.error('Error ao atualizar dados:', err);
    throw err;
  }
}

const deleteClient = async (id: number, ownerId: number) => {
  try {
    const response = await fetch(`${URL_API}/${id}/${ownerId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Falha ao excluir dados');
    }

    const deleteClient = await response.json();
    return deleteClient;

  } catch (err) {
    console.error('Error ao deletar cliente:', err)
    throw err;
  }
}