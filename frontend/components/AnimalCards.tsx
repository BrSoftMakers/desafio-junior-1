import axios from 'axios';
import React, { useState } from 'react';

const AnimalCard = ({ pet, handleEdit }) => {
  const [expanded, setExpanded] = useState(false);
  const [message, setMessage] = useState('');

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleDelete = async () => {
    const isConfirmed = window.confirm("Tem certeza que deseja excluir este pet?");
    if (isConfirmed) {
      try {
        const response = await axios.delete(`http://localhost:3000/pets/${pet.id}`);
        setMessage('Pet excluído com sucesso!');
        window.location.reload();
      } catch (error) {
        setMessage('Erro ao excluir pet. Por favor, tente novamente mais tarde.');
        console.error('Erro ao excluir pet:', error);
      }
    }
  };

  return (
    <div style={{ position: 'relative', marginBottom: expanded ? 100 : 20 }}>
      <div style={{ 
        textAlign: 'left',
        maxWidth: 300, 
        width: '100%', 
        background: 'linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)', 
        border: '1px solid #ccc', 
        borderRadius: 8, 
        padding: 10,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        transition: 'box-shadow 0.3s ease', 
        cursor: 'pointer', 
        }}
        onClick={toggleExpanded} 
      >
        <h2 style={{ color: 'white' }}><strong>Nome:</strong> {pet.name}</h2>
        <p style={{ color: 'white' }}><strong>Dono:</strong> {pet.ownerName}</p>
        <p style={{ color: 'white' }}><strong>Espécie:</strong> {pet.type}</p>
      </div>
      {expanded && (
        <div style={{ position: 'absolute', top: 100, left: 0, right: 0, 
        background: 'linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)', 
        textAlign: 'left',
        border: '1px solid #ccc', 
        borderRadius: 8, 
        padding: 10, 
        zIndex: 999,
        }}>
          {/* Conteúdo adicional */}
          <p style={{ color: 'white' }}><strong>Idade:</strong> {pet.age}</p>
          <p style={{ color: 'white' }}><strong>Raça:</strong> {pet.breed}</p>
          <p style={{ color: 'white' }}><strong>Contato do Dono:</strong> {pet.ownerContact}</p>
          <div style={{ marginTop: 10 }}>
            <button 
              style={{ 
                width:"100%",
                position: "relative",
                padding: "5px 10px",
                backgroundColor: "#007bff",
                background: "rgba(255, 255, 255, 1)",
                color: "rgba(0, 202, 252, 1)",
                border: "none", 
                borderRadius: "4em", 
                cursor: "pointer",
                marginBottom: 5,
              }}
              onClick={() => handleEdit(pet)}
            >
              Editar
            </button>
            <button 
              style={{ 
                width:"100%",
                position: "relative",
                padding: "5px 10px",
                backgroundColor: "#007bff",
                background: "linear-gradient(90deg, #00CAFC 0%, #0056E2 100%)", 
                border: "none", 
                borderRadius: "4em", 
                cursor: "pointer",
              }}
              onClick={handleDelete}
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
