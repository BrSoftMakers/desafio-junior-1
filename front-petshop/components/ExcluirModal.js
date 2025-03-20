"use client";

import React from 'react';
import { deletePet } from '../services/api';
import Image from 'next/image';

const ExcluirModal = ({ isOpen, onClose, petToDelete }) => {
  const handleExcluir = async () => {
    try {
      await deletePet(petToDelete.id);
      console.log('Pet excluído com sucesso!');
      onClose();
      window.location.reload();
    } catch (error) {
      console.error('Erro ao excluir o pet:', error);
      alert('Erro ao excluir o pet.');
    }
  };

  if (!petToDelete) return null;

  return (
    <div style={{ display: isOpen ? 'block' : 'none' }}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)',
            padding: 20,
            borderRadius: 8,
            maxWidth: 600,
            border: '3px solid rgba(0, 202, 252, 1)',
            color: 'white',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2em' }}>
            <Image src="/icon-excluir.svg" alt="Excluir" width={40} height={40} style={{ marginRight: '10px' }} />
            <h1 style={{ color: 'white', margin: 0 }}>Excluir</h1>
          </div>
          <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 10,
              }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ color: '#404A5C' }}>Nome:</label>
              <div
                style={{
                  background: 'linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)',
                  marginBottom: 10,
                  border: '3px solid #404A5C',
                  borderRadius: 4,
                  padding: 8,
                  color: 'white',
                }}
              >
                {petToDelete.name}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ color: '#404A5C' }}>Tipo:</label>
              <div
                style={{
                  background: 'linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)',
                  marginBottom: 10,
                  border: '3px solid #404A5C',
                  borderRadius: 4,
                  padding: 8,
                  color: 'white',
                }}
              >
                {petToDelete.type}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ color: '#404A5C' }}>Raça:</label>
              <div
                style={{
                  background: 'linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)',
                  marginBottom: 10,
                  border: '3px solid #404A5C',
                  borderRadius: 4,
                  padding: 8,
                  color: 'white',
                }}
              >
                {petToDelete.breed}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ color: '#404A5C' }}>Dono:</label>
              <div
                style={{
                  background: 'linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)',
                  marginBottom: 10,
                  border: '3px solid #404A5C',
                  borderRadius: 4,
                  padding: 8,
                  color: 'white',
                }}
              >
                {petToDelete.ownerName}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ color: '#404A5C' }}>Contato do Dono:</label>
              <div
                style={{
                  background: 'linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)',
                  marginBottom: 10,
                  border: '3px solid #404A5C',
                  borderRadius: 4,
                  padding: 8,
                  color: 'white',
                }}
              >
                {petToDelete.ownerPhone}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ color: '#404A5C' }}>Data de Nascimento:</label>
              <div
                style={{
                  background: 'linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)',
                  marginBottom: 10,
                  border: '3px solid #404A5C',
                  borderRadius: 4,
                  padding: 8,
                  color: 'white',
                }}
              >
                {new Date(petToDelete.birthDate).toLocaleDateString('pt-BR')}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ color: '#404A5C' }}>Idade:</label>
              <div
                style={{
                  background: 'linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)',
                  marginBottom: 10,
                  border: '3px solid #404A5C',
                  borderRadius: 4,
                  padding: 8,
                  color: 'white',
                }}
              >
                {petToDelete.age}
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'right', marginTop: '20px' }}>
            <button
              onClick={handleExcluir}
              style={{
                marginRight: 10,
                padding: '5px 10px',
                backgroundColor: '#dc3545',
                border: 'none',
                borderRadius: '4em',
                cursor: 'pointer',
                color: 'white',
              }}
            >
              Remover
            </button>
            <button
              onClick={onClose}
              style={{
                padding: '5px 10px',
                backgroundColor: '#6c757d',
                border: 'none',
                borderRadius: '4em',
                cursor: 'pointer',
                color: 'white',
              }}
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcluirModal;