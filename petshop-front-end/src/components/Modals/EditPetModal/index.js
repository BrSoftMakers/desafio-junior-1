import React, { useState, useEffect } from 'react';
import { getPet, patchPet } from '../../../services/pets';

function EditPetModal({ petId, onClose, onUpdatePetData }) {
    // Estado para armazenar os dados do pet selecionado
    const [petData, setPetData] = useState(null);

    // Estado para armazenar os dados editados do pet
    const [editedPetData, setEditedPetData] = useState({ pet: {} });

    // UseEffect para buscar os dados do pet com base no petId
    useEffect(() => {
        async function fetchPetData() {
            try {
                const pet = await getPet(petId);
                setPetData(pet);

                // Verifica se os dados do pet possuem as propriedades corretas
                if (pet && pet.pet && pet.pet.name && pet.pet.age && pet.pet.breed) {
                    setEditedPetData({ pet: { ...pet.pet } });
                }
            } catch (error) {
                console.error('Erro ao carregar os dados do pet:', error);
            }
        }

        fetchPetData();
    }, [petId]);

    // Função para lidar com as mudanças nos campos de entrada
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedPetData((prevState) => ({
            pet: {
                ...prevState.pet,
                [name]: value,
            },
        }));
    };

    // Função para salvar as alterações no pet
    const handleSave = async () => {
        try {
            // Chama a função para atualizar o pet com os dados editados
            const updatedPet = await patchPet(petId, editedPetData.pet);

            // Chama a função onUpdatePetData para notificar sobre a atualização
            onUpdatePetData();

            // Fecha o modal
            onClose();
        } catch (error) {
            console.error('Erro ao salvar as alterações no pet:', error);
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-70 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold mb-4">Editar Pet</h2>
                {petData && (
                    <form>
                        {/* Campo de Nome do Pet */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium">
                                Nome do Pet
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={editedPetData.pet.name}
                                onChange={handleInputChange}
                                className="w-full border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>

                        {/* Campo de Idade do Pet */}
                        <div className="mb-4">
                            <label htmlFor="age" className="block text-sm font-medium">
                                Idade do Pet
                            </label>
                            <input
                                type="text"
                                id="age"
                                name="age"
                                value={editedPetData.pet.age}
                                onChange={handleInputChange}
                                className="w-full border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>

                        {/* Campo de Raça do Pet */}
                        <div className="mb-4">
                            <label htmlFor="breed" className="block text-sm font-medium">
                                Raça do Pet
                            </label>
                            <input
                                type="text"
                                id="breed"
                                name="breed"
                                value={editedPetData.pet.breed}
                                onChange={handleInputChange}
                                className="w-full border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>

                        {/* Botões de Salvar e Cancelar */}
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={handleSave}
                                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                            >
                                Salvar
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="ml-2 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default EditPetModal;