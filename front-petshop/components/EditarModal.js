"use client";

import React, { useState, useEffect } from 'react';
import { updatePet, deletePet } from '../services/api';
import Image from 'next/image';

const EditarModal = ({ isOpen, onClose, petToEdit }) => {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [raca, setRaca] = useState('');
  const [nomeDono, setNomeDono] = useState('');
  const [contatoDono, setContatoDono] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (petToEdit) {
      setNome(petToEdit.name || '');
      setTipo(petToEdit.type || '');
      setRaca(petToEdit.breed || '');
      setNomeDono(petToEdit.ownerName || '');
      setContatoDono(petToEdit.ownerPhone || '');
      setBirthDate(petToEdit.birthDate || '');
    }
  }, [petToEdit]);

  const handleEditar = async () => {
    if (!nome || !birthDate || !tipo || !raca || !nomeDono || !contatoDono) {
      setError('Todos os campos devem ser preenchidos');
      alert(error);
      return;
    }

    const data = {
      name: nome,
      type: tipo,
      breed: raca,
      ownerName: nomeDono,
      ownerPhone: contatoDono,
      birthDate: birthDate,
    };

    try {
      await updatePet(petToEdit.id, data);
      console.log('Pet editado com sucesso!');
      onClose();
      window.location.reload();
    } catch (error) {
      console.error('Erro ao editar o pet:', error);
      alert('Erro ao editar o pet.');
    }
  };

  const handleCancelar = () => {
    setNome('');
    setTipo('');
    setRaca('');
    setNomeDono('');
    setContatoDono('');
    setBirthDate('');
    setError(null);
    onClose();
  };

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
            <Image src="/icon-editar.svg" alt="Editar" width={40} height={40} style={{ marginRight: '10px' }} />
            <h1 style={{ color: 'white', margin: 0 }}>Editar</h1>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 10,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <label style={{ color: '#404A5C' }}>Nome:</label>
              <input
                required
                type="text"
                placeholder="Simba"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                style={{
                  background: 'linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)',
                  marginBottom: 10,
                  border: '3px solid #404A5C',
                  borderRadius: 4,
                  padding: 8,
                  color: 'white',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <label style={{ color: '#404A5C' }}>Tipo:</label>
              <div
                style={{
                  background: 'linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)',
                  marginBottom: 10,
                  border: '3px solid #404A5C',
                  borderRadius: 4,
                  padding: 8,
                }}
              >
                <input
                  type="checkbox"
                  id="cat"
                  name="tipo"
                  value="Cat"
                  checked={tipo === 'Cat'}
                  onChange={(e) => setTipo(e.target.value)}
                  style={{ marginRight: 10 }}
                />
                <label htmlFor="cat" style={{ color: '#404A5C' }}>Gato</label>
                <input
                  type="checkbox"
                  id="dog"
                  name="tipo"
                  value="Dog"
                  checked={tipo === 'Dog'}
                  onChange={(e) => setTipo(e.target.value)}
                  style={{ marginLeft: 10, marginRight: 10 }}
                />
                <label htmlFor="dog" style={{ color: '#404A5C' }}>Cachorro</label>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <label style={{ color: '#404A5C' }}>Raça:</label>
              <input
                required
                type="text"
                placeholder="Siamese"
                value={raca}
                onChange={(e) => setRaca(e.target.value)}
                style={{
                  background: 'linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)',
                  marginBottom: 10,
                  border: '3px solid #404A5C',
                  borderRadius: 4,
                  padding: 8,
                  color: 'white',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <label style={{ color: '#404A5C' }}>Dono:</label>
              <input
                required
                type="text"
                placeholder="Jailson"
                value={nomeDono}
                onChange={(e) => setNomeDono(e.target.value)}
                style={{
                  background: 'linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)',
                  marginBottom: 10,
                  border: '3px solid #404A5C',
                  borderRadius: 4,
                  padding: 8,
                  color: 'white',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <label style={{ color: '#404A5C' }}>Contato do Dono:</label>
              <input
                required
                type="text"
                placeholder="11988887777"
                value={contatoDono}
                onChange={(e) => setContatoDono(e.target.value)}
                style={{
                  background: 'linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)',
                  marginBottom: 10,
                  border: '3px solid #404A5C',
                  borderRadius: 4,
                  padding: 8,
                  color: 'white',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <label style={{ color: '#404A5C' }}>Data de Nascimento:</label>
              <input
                required
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                style={{
                  background: 'linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)',
                  marginBottom: 10,
                  border: '3px solid #404A5C',
                  borderRadius: 4,
                  padding: 8,
                  color: 'white',
                }}
              />
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <button
              onClick={handleEditar}
              style={{
                marginRight: 10,
                padding: '5px 10px',
                backgroundColor: '#007bff',
                border: 'none',
                borderRadius: '4em',
                cursor: 'pointer',
                color: 'white',
              }}
            >
              Salvar
            </button>
            <button
              onClick={handleCancelar}
              style={{
                padding: '5px 10px',
                backgroundColor: '#6c757d',
                border: 'none',
                borderRadius: '4em',
                cursor: 'pointer',
                color: 'white',
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarModal;