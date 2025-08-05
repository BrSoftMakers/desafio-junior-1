'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Pet } from '../types/pet.d';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  pet: Pet | null;
}

function DeleteModal({ isOpen, onClose, onConfirm, pet }: DeleteModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !pet) return null;

  const modalContent = (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: 'rgba(0, 8, 20, 0.9)',
        backdropFilter: 'blur(12px)'
      }}
      onClick={onClose}
    >
      <div 
        className="flex flex-col items-center p-8"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '618px',
          background: 'linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)',
          boxShadow: '0px 0px 15px 10px rgba(0, 86, 226, 0.2)',
          borderRadius: '10px',
          boxSizing: 'border-box'
        }}
      >
        {/* Header - Alinhado no topo */}
        <div className="flex w-full justify-between items-center mb-10">
          <div className="flex items-center gap-4">
            {/* Ícone lixeira */}
            <div style={{
              width: '72px',
              height: '72px',
              background: 'linear-gradient(90deg, #FF4444 0%, #CC0000 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="2"
              >
                <polyline points="3,6 5,6 21,6"></polyline>
                <path d="m5,6 1,14a2,2 0 0 0 2,2h8a2,2 0 0 0 2,-2l1,-14"></path>
                <path d="m10,11v6"></path>
                <path d="m14,11v6"></path>
                <path d="M9,6V4a1,1 0 0 1 1,-1h4a1,1 0 0 1 1,1v2"></path>
              </svg>
            </div>
            {/* Texto "Remover" */}
            <h2 style={{
              fontFamily: 'Ubuntu',
              fontWeight: '700',
              fontSize: '30px',
              lineHeight: '34px',
              color: '#FFFFFF'
            }}>
              Remover
            </h2>
          </div>
          {/* Botão X para fechar */}
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '0'
            }}
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#FFFFFF" 
              strokeWidth="3"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Corpo do Modal - Detalhes do Pet e Pergunta de Confirmação */}
        <div className="w-full">
          {/* Seção de informações do pet */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            marginBottom: '40px'
          }}>
            {/* Coluna esquerda */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Nome */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px'
                }}>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span style={{
                    fontFamily: 'Ubuntu',
                    fontWeight: '400',
                    fontSize: '14px',
                    color: '#FFFFFF'
                  }}>
                    Nome
                  </span>
                </div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '5px',
                  padding: '12px 16px',
                  fontFamily: 'Ubuntu',
                  fontSize: '14px',
                  color: '#FFFFFF',
                  fontWeight: '400'
                }}>
                  {pet.nome}
                </div>
              </div>

              {/* Dono */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px'
                }}>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span style={{
                    fontFamily: 'Ubuntu',
                    fontWeight: '400',
                    fontSize: '14px',
                    color: '#FFFFFF'
                  }}>
                    Dono
                  </span>
                </div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '5px',
                  padding: '12px 16px',
                  fontFamily: 'Ubuntu',
                  fontSize: '14px',
                  color: '#FFFFFF',
                  fontWeight: '400'
                }}>
                  {pet.dono?.nome || 'Não informado'}
                </div>
              </div>

              {/* Telefone */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px'
                }}>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span style={{
                    fontFamily: 'Ubuntu',
                    fontWeight: '400',
                    fontSize: '14px',
                    color: '#FFFFFF'
                  }}>
                    Telefone
                  </span>
                </div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '5px',
                  padding: '12px 16px',
                  fontFamily: 'Ubuntu',
                  fontSize: '14px',
                  color: '#FFFFFF',
                  fontWeight: '400'
                }}>
                  {pet.dono?.telefone || 'Não informado'}
                </div>
              </div>
            </div>

            {/* Coluna direita */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Animal */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px'
                }}>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2"
                  >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4z"></path>
                  </svg>
                  <span style={{
                    fontFamily: 'Ubuntu',
                    fontWeight: '400',
                    fontSize: '14px',
                    color: '#FFFFFF'
                  }}>
                    Animal
                  </span>
                </div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '5px',
                  padding: '12px 16px',
                  fontFamily: 'Ubuntu',
                  fontSize: '14px',
                  color: '#FFFFFF',
                  fontWeight: '400'
                }}>
                  {pet.tipo}
                </div>
              </div>

              {/* Raça */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px'
                }}>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="4" r="2"></circle>
                    <circle cx="18" cy="8" r="2"></circle>
                    <circle cx="20" cy="16" r="2"></circle>
                    <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"></path>
                  </svg>
                  <span style={{
                    fontFamily: 'Ubuntu',
                    fontWeight: '400',
                    fontSize: '14px',
                    color: '#FFFFFF'
                  }}>
                    Raça
                  </span>
                </div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '5px',
                  padding: '12px 16px',
                  fontFamily: 'Ubuntu',
                  fontSize: '14px',
                  color: '#FFFFFF',
                  fontWeight: '400'
                }}>
                  {pet.raca}
                </div>
              </div>

              {/* Nascimento */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px'
                }}>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span style={{
                    fontFamily: 'Ubuntu',
                    fontWeight: '400',
                    fontSize: '14px',
                    color: '#FFFFFF'
                  }}>
                    Nascimento <span style={{ opacity: 0.6 }}>(Aproximado)</span>
                  </span>
                </div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '5px',
                  padding: '12px 16px',
                  fontFamily: 'Ubuntu',
                  fontSize: '14px',
                  color: '#FFFFFF',
                  fontWeight: '400'
                }}>
                  {pet.idade} Anos
                </div>
              </div>
            </div>
          </div>

          {/* Pergunta de confirmação */}
          <div style={{
            textAlign: 'center',
            fontFamily: 'Ubuntu',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '18px',
            lineHeight: '21px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF'
          }}>
            Tem certeza que deseja remover esse pet?
          </div>
        </div>

        {/* Botões de Ação - alinhados no fundo */}
        <div className="flex w-full justify-center gap-4 mt-8">
          {/* Botão Voltar */}
          <button
            onClick={onClose}
            className="w-1/2 flex items-center justify-center gap-2 py-2"
            style={{
              background: '#FFFFFF',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#0056E2" 
              strokeWidth="2"
            >
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
            <span style={{
              fontFamily: 'Ubuntu',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              lineHeight: '18px',
              background: 'linear-gradient(90deg, #00CAFC 0%, #0056E2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Voltar
            </span>
          </button>

          {/* Botão Remover */}
          <button
            onClick={onConfirm}
            className="w-1/2 flex items-center justify-center gap-2 py-2"
            style={{
              background: 'linear-gradient(90deg, #FF4444 0%, #CC0000 100%)',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              color: '#FFFFFF',
              fontFamily: 'Ubuntu',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              lineHeight: '18px'
            }}
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2"
            >
              <polyline points="3,6 5,6 21,6"></polyline>
              <path d="m5,6 1,14a2,2 0 0 0 2,2h8a2,2 0 0 0 2,-2l1,-14"></path>
              <path d="m10,11v6"></path>
              <path d="m14,11v6"></path>
              <path d="M9,6V4a1,1 0 0 1 1,-1h4a1,1 0 0 1 1,1v2"></path>
            </svg>
            Remover
          </button>
        </div>
      </div>
    </div>
  );
  
  if (typeof window === 'undefined') return null;
  return createPortal(modalContent, document.body);
}

export default DeleteModal;