import React, { useState, useEffect } from 'react';
import SeachAnimal from '../SeachAnimal/index.';
import pata from '../../img/patas.png';
import { getPet, getPets, deletePet } from '../../services/pets';
import { getUser } from '../../services/user';
import EditPetModal from '../Modals/EditPetModal';

function EditarAnimal() {
    // Estado para armazenar a lista de pets
    const [pets, setPets] = useState([]);

    // Estado para armazenar o ID do pet selecionado
    const [selectedPetId, setSelectedPetId] = useState(null);

    // Estado para controlar a abertura/fechamento do modal de edição
    const [isEditModalOpen, setEditModalOpen] = useState(false);

    // Estado para armazenar os dados do pet selecionado
    const [selectedPetData, setSelectedPetData] = useState(null);

    // Estado para controlar as atualizações de dados
    const [dataUpdated, setDataUpdated] = useState(false);

    // UseEffect para buscar a lista de pets
    useEffect(() => {
        async function fetchPets() {
            try {
                const petList = await getPets();

                // Obtém os nomes dos proprietários e adiciona ao objeto pet
                const petsWithOwnerNames = await Promise.all(
                    petList.map(async (pet) => {
                        try {
                            const user = await getUser(pet.ownerId);
                            console.log(`Nome do responsável para o pet com ID ${pet.id}: ${user.dataUser.name}`);
                            return { ...pet, ownerName: user.dataUser.name };
                        } catch (error) {
                            console.error(`Erro ao obter o usuário para o pet com ID ${pet.id}:`, error);
                            return { ...pet, ownerName: 'Não encontrado' };
                        }
                    })
                );

                setPets(petsWithOwnerNames);
            } catch (error) {
                console.error('Erro ao obter os pets:', error);
            }
        }

        fetchPets();
    }, [dataUpdated]); // Atualiza a lista quando dataUpdated muda

    // Função para lidar com o clique no botão de edição
    const handleEditClick = async (petId) => {
        setSelectedPetId(petId);

        try {
            const pet = await getPet(petId);
            setSelectedPetData(pet); // Define os dados do pet selecionado
            setEditModalOpen(true);
        } catch (error) {
            console.error('Erro ao obter os dados do pet:', error);
        }
    };

    // Função para lidar com o clique no botão de exclusão
    const handleDeleteClick = async (petId) => {
        try {
            // Chama a função para excluir o pet pelo ID
            await deletePet(petId);

            // Atualiza a lista de pets após a exclusão
            const updatedPets = pets.filter((pet) => pet.id !== petId);
            setPets(updatedPets);
        } catch (error) {
            console.error(`Erro ao excluir o pet com o ID ${petId}:`, error);
            // Lida com erros, como exibir uma mensagem de erro
        }
    };

    // Função para lidar com a atualização de dados
    const handleDataUpdated = () => {
        setDataUpdated(true);
    };

    return (
        <div className='relative ml-[195px] -mt-[650px]'>
            {/* Seção de pesquisa e botão de cadastro */}
            <section className="flex justify-between mx-8 mt-4 items-center">
                <SeachAnimal />

                <div className="flex items-center">
                    <a href="/cadastroAnimal" className="w-50 px-3 py-2 bg-#0588D1 p-2 text-white rounded-xl hover:bg-blue-800 flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                        </svg>
                        Cadastrar
                    </a>
                </div>
            </section>

            {/* Tabela de pets */}
            <table className="mx-8 mt-4 bg-gray-200 rounded-xl mb-10 w-[1100px]">
                <thead className="text-#0588D1">
                <tr className="">
                    <th className="py-2 w-1/4">Nome do responsável:</th>
                    <th className="py-2 w-1/4">Nome</th>
                    <th className="py-2 w-1/4">Idade</th>
                    <th className="py-2 w-1/4">Raça</th>
                    <th className="py-2 w-1/4">Ações</th>
                </tr>
                </thead>
                <tbody>
                {pets.map((pet) => (
                    <tr key={pet.id} className="space-x-8 border-t-2 border-white text-gray-700 text-center">
                        <td className="flex items-center my-2 ml-4 text-center">
                            <span className='flex justify-center w-8 h-8'><img className="h-8 ml-0" src={pata} alt="Imagem" /></span>
                            <span className="ml-2 mr-4">{pet.ownerName}</span>
                        </td>
                        <td className="px-8"><span className='flexe text-black h-8 w-8 rounded-md justify-center'>{pet.name}</span></td>
                        <td className="px-8 ">{pet.age}</td>
                        <td className="px-8 h-8 w-8">{pet.breed}</td>
                        <td className="px-8 ">
                            <button onClick={() => handleEditClick(pet.id)} className="hover-bg-gray-400 rounded">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                    />
                                </svg>
                            </button>
                        </td>
                        <td className="px-8 h-8 w-8"><button onClick={() => handleDeleteClick(pet.id)}>
                            Excluir
                        </button></td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Modal de edição de pet */}
            {isEditModalOpen && (
                <EditPetModal
                    petId={selectedPetId}
                    petData={selectedPetData}
                    onClose={() => setEditModalOpen(false)}
                    onUpdatePetData={handleDataUpdated}
                />
            )}
        </div>
    );
}

export default EditarAnimal;