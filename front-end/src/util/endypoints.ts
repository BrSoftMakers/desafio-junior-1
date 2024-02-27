import { ICreatedClient } from './../app/types/IClients';

const URL_API = "http://localhost:3001/client";

const getAllClients = async () => {
  try {
    const response = await fetch(URL_API);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Erro ao obter os dados de:', err);
    throw err;
  }
};

const createClient = async (data: ICreatedClient) => {
  try {
    const response = await fetch(URL_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error("Falha ao criar o Cliente");
    }

    const dataCreated = await response.json();
    return dataCreated;
  } catch (err) {
    console.error("Erro ao criar novos dados:", err);
    throw err;
  }
};

const updateClient = async (id: number, ownerId: number, clientData: ICreatedClient) => {
  try {
    const response = await fetch(`${URL_API}/${id}/${ownerId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(clientData)
    });

    if (!response.ok) {
      throw new Error('Falha ao atualizar dados');
    }

    const updatedClient = await response.json();
    return updatedClient;
  } catch (err) {
    console.error('Erro ao atualizar dados:', err);
    throw err;
  }
};

const deleteClient = async (id: number, ownerId: number) => {
  try {
    const response = await fetch(`${URL_API}/${id}/${ownerId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Falha ao excluir dados');
    }

    const deletedClient = await response.json();
    return deletedClient;

  } catch (err) {
    console.error('Erro ao deletar cliente:', err);
    throw err;
  }
};


export { getAllClients, createClient, deleteClient, updateClient }