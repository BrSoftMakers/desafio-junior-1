'use client';

import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function EditModal({ isOpen, onClose, children }: EditModalProps) {
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

  if (!isOpen) return null;

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
        className="relative"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'absolute',
          width: '618px',
          height: '583px',
          left: 'calc(50% - 618px/2)',
          top: 'calc(50% - 583px/2 + 0.5px)',
          background: 'linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)',
          boxShadow: '0px 0px 15px 10px rgba(0, 86, 226, 0.2)',
          borderRadius: '10px',
          boxSizing: 'border-box',
          padding: '32px'
        }}
      >
        {/* Header conforme Figma - Versão Editar */}
        <div style={{ position: 'relative', width: '100%', height: '72px' }}>
          {/* Group 13 - Botão circular com ícone de editar */}
          <div style={{
            position: 'absolute',
            width: '72px',
            height: '72px',
            left: 'calc(50% - 72px/2 - 211px)',
            top: '0px'
          }}>
            {/* Ellipse 7 */}
            <div style={{
              position: 'absolute',
              width: '72px',
              height: '72px',
              left: '0px',
              top: '0px',
              background: 'linear-gradient(90deg, #FFA500 0%, #FF8C00 100%)',
              borderRadius: '50%'
            }}>
              {/* Ícone editar */}
              <div style={{
                position: 'absolute',
                left: '33.09%',
                right: '63.98%',
                top: '24.28%',
                bottom: '70.91%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Texto "Editar" */}
          <h2 style={{
            position: 'absolute',
            width: '141px',
            height: '34px',
            left: '130px',
            top: '19px',
            fontFamily: 'Ubuntu',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '30px',
            lineHeight: '34px',
            display: 'flex',
            alignItems: 'center',
            color: '#FFFFFF'
          }}>
            Editar
          </h2>

          {/* Botão X para fechar */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              left: '85%',
              right: '10%',
              top: '25.72%',
              bottom: '72.36%',
              background: '#FFFFFF',
              border: 'none',
              cursor: 'pointer',
              padding: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#000000" 
              strokeWidth="3"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div style={{ position: 'relative', marginTop: '60px' }}>
          {children}
        </div>

        {/* Botões Voltar e Salvar - conforme especificação Figma */}
        {/* Group 38 - Botão Voltar */}
        <div style={{
          position: 'absolute',
          width: '231px',
          height: '40px',
          left: 'calc(50% - 231px/2 - 131.5px)',
          top: '480px'
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              width: '231px',
              height: '40px',
              left: '0px',
              top: '0px',
              background: '#FFFFFF',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
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
        </div>

        {/* Group 19 - Botão Salvar */}
        <div style={{
          position: 'absolute',
          width: '231px',
          height: '40px',
          left: 'calc(50% - 231px/2 + 132.5px)',
          top: '480px'
        }}>
          <button
            onClick={() => {
              const form = document.querySelector('form');
              if (form) {
                form.requestSubmit();
              }
            }}
            style={{
              position: 'absolute',
              width: '231px',
              height: '40px',
              left: '0px',
              top: '0px',
              background: 'linear-gradient(90deg, #FFA500 0%, #FF8C00 100%)',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <span style={{
              fontFamily: 'Ubuntu',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              lineHeight: '18px',
              color: '#FFFFFF'
            }}>
              Salvar
            </span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"></path>
              <polyline points="17,21 17,13 7,13 7,21"></polyline>
              <polyline points="7,3 7,8 15,8"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  if (typeof window === 'undefined') return null;
  
  return createPortal(modalContent, document.body);
}

export default EditModal;
