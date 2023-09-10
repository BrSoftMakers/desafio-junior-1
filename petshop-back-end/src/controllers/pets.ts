import { Request, Response } from 'express';
// @ts-ignore
import { PetAttributes } from '../models/Pet'; // Corrigir a importação aqui
import {
    listPets,
    getPetById,
    createPet,
    updatePet,
    deletePet,
} from '../services/pets';

// Função para listar todos os pets
async function getPets(req: Request, res: Response) {
    try {
        const pets = await listPets();
        return res.json({ success: true, pets });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Erro ao listar os pets.' });
    }
}

// Função para obter um pet por ID
async function getPet(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const pet = await getPetById(Number(id));
        if (pet) {
            return res.json({ success: true, pet });
        } else {
            return res.status(404).json({ success: false, message: 'Pet não encontrado.' });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Erro ao buscar o pet.' });
    }
}

// Função para criar um novo pet
async function postPet(req: Request, res: Response) {
    const petData: PetAttributes = req.body;
    try {
        const pet = await createPet(petData);
        return res.status(201).json({ success: true, message: 'Pet cadastrado com sucesso!', pet });
    } catch (error) {
        return res.status(400).json({ success: false, message: 'Erro ao criar o pet.' });
    }
}

// Função para atualizar um pet por ID
async function patchPet(req: Request, res: Response) {
    const { id } = req.params;
    const petData: PetAttributes = req.body;
    try {
        const [updatedRows] = await updatePet(Number(id), petData);
        if (updatedRows > 0) {
            return res.json({ success: true, message: 'Pet atualizado com sucesso!' });
        } else {
            return res.status(404).json({ success: false, message: 'Pet não encontrado.' });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Erro ao atualizar o pet.' });
    }
}

// Função para excluir um pet por ID
async function deletePetHandler(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const deletedRows = await deletePet(Number(id));
        if (deletedRows > 0) {
            return res.json({ success: true, message: 'Pet excluído com sucesso!' });
        } else {
            return res.status(404).json({ success: false, message: 'Pet não encontrado.' });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Erro ao excluir o pet.' });
    }
}

// Exportar todas as funções CRUD
export { getPets, getPet, postPet, patchPet, deletePetHandler };