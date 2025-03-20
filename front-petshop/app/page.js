"use client";

import { useState, useEffect } from 'react';
import { fetchPets } from '../services/api';
import AnimalCard from '../components/AnimalCard';
import CadastroModal from '../components/CadastroModal';
import EditarModal from '../components/EditarModal';
import ExcluirModal from '../components/ExcluirModal';
import Image from 'next/image';

export default function Home() {
  const [pets, setPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isCadastroModalOpen, setIsCadastroModalOpen] = useState(false);
  const [isEditarModalOpen, setIsEditarModalOpen] = useState(false);
  const [isExcluirModalOpen, setIsExcluirModalOpen] = useState(false);
  const [petToEdit, setPetToEdit] = useState(null);
  const [petToDelete, setPetToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); 

  const cardsPerPage = 16; 

  useEffect(() => {
    async function loadPets() {
      try {
        const petsData = await fetchPets();
        setPets(petsData);
      } catch (error) {
        console.error('Erro ao carregar pets:', error);
      }
    }
    loadPets();
  }, []);

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPets.length / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentPets = filteredPets.slice(startIndex, endIndex);

  const openCadastroModal = () => {
    setIsCadastroModalOpen(true);
  };

  const closeCadastroModal = () => {
    setIsCadastroModalOpen(false);
  };

  const openEditarModal = (pet) => {
    setPetToEdit(pet);
    setIsEditarModalOpen(true);
  };

  const closeEditarModal = () => {
    setPetToEdit(null);
    setIsEditarModalOpen(false);
  };

  const openExcluirModal = (pet) => {
    setPetToDelete(pet);
    setIsExcluirModalOpen(true);
  };

  const closeExcluirModal = () => {
    setPetToDelete(null);
    setIsExcluirModalOpen(false);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div
      style={{
        textAlign: 'center',
        background: 'linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)',
        minHeight: '100vh',
        padding: '20px',
        color: 'white',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '40px',
          marginLeft: '55px',
        }}
      >
        <div style={{ marginRight: '10px' }}>
          <Image src='/logo.svg' alt='Logo' width={61} height={48} />
        </div>
        <h1 style={{ fontSize: '30px', textAlign: 'left', margin: 0 }}>SoftPet</h1>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '50%',
            display: 'flex',
            top: '50px',
          }}
        >
          <input
            type='text'
            placeholder='   Pesquisar...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              background: 'linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)',
              height: '50px',
              border: 'solid 3px',
              borderColor: 'grey',
              borderRadius: '4em',
              textAlign: 'center',
              color: 'white',
            }}
          />
        </div>
        <button
          style={{
            position: 'relative',
            top: '50px',
            padding: '5px 10px',
            marginLeft: 10,
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '4em',
            cursor: 'pointer',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
          }}
          onClick={openCadastroModal}
        >
          <Image src="/plus.svg" alt="Adicionar" width={16} height={16} style={{ marginRight: '5px' }} />
          Cadastrar
        </button>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '20px', 
          justifyContent: 'center',
          marginTop: '100px',
          maxWidth: '1300px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {currentPets.map((pet) => (
          <div key={pet.id}>
            <AnimalCard pet={pet} handleEdit={openEditarModal} handleDelete={openExcluirModal} />
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      {totalPages > 1 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            gap: '10px',
          }}
        >
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            style={{
              padding: '5px 15px',
              backgroundColor: currentPage === 1 ? '#6c757d' : '#007bff',
              border: 'none',
              borderRadius: '4em',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              color: 'white',
            }}
          >
            Página Anterior
          </button>
          <span style={{ alignSelf: 'center' }}>
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            style={{
              padding: '5px 15px',
              backgroundColor: currentPage === totalPages ? '#6c757d' : '#007bff',
              border: 'none',
              borderRadius: '4em',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              color: 'white',
            }}
          >
            Página Seguinte
          </button>
        </div>
      )}

      <CadastroModal isOpen={isCadastroModalOpen} onClose={closeCadastroModal} />
      <EditarModal isOpen={isEditarModalOpen} onClose={closeEditarModal} petToEdit={petToEdit} />
      <ExcluirModal isOpen={isExcluirModalOpen} onClose={closeExcluirModal} petToDelete={petToDelete} />
    </div>
  );
}