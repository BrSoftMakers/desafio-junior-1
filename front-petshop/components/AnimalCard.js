"use client";

import Image from 'next/image';
import { useState } from 'react';

const AnimalCard = ({ pet, handleEdit, handleDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const typeIcon = pet.type === 'Dog' ? '/icondog.svg' : '/iconcat.svg';

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {/* Card Principal */}
      <div
        onClick={toggleExpand}
        style={{
          background: 'linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)',
          border: '3px solid rgba(0, 202, 252, 1)',
          borderRadius: '8px',
          padding: '15px',
          color: 'white',
          width: '300px',
          textAlign: 'left',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 202, 252, 0.5)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = 'scale(0.98)';
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '60px',
          }}
        >
          <div style={{ height: '100%', width: '60px' }}>
            <Image
              src={typeIcon}
              alt={pet.type}
              layout="responsive"
              width={60}
              height={60}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ margin: 0 }}>Nome: {pet.name}</h3>
            <p style={{ margin: 0 }}>Dono: {pet.ownerName}</p>
          </div>
        </div>
      </div>

      {/* Card Secundário */}
      {isExpanded && (
        <div
          style={{
            background: 'linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)',
            border: '3px solid rgba(0, 202, 252, 1)',
            borderRadius: '8px',
            padding: '15px',
            color: 'white',
            width: '300px',
            marginTop: '10px',
            textAlign: 'left',
          }}
        >
          <p style={{ margin: '0 0 5px 0' }}>Raça: {pet.breed}</p>
          <p style={{ margin: '0 0 5px 0' }}>Telefone: {pet.ownerPhone}</p>
          <p style={{ margin: '0 0 5px 0' }}>Idade: {pet.age}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleEdit(pet);
              }}
              style={{
                padding: '5px 10px',
                backgroundColor: '#007bff',
                border: 'none',
                borderRadius: '4em',
                cursor: 'pointer',
                color: 'white',
              }}
            >
              Editar
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(pet);
              }}
              style={{
                padding: '5px 10px',
                backgroundColor: '#dc3545',
                border: 'none',
                borderRadius: '4em',
                cursor: 'pointer',
                color: 'white',
              }}
            >
              Excluir
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimalCard;