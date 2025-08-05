'use client';

import { Pet } from '../types/pet.d';

interface DeleteConfirmationProps {
  pet: Pet | null;
}

function DeleteConfirmation({ pet }: DeleteConfirmationProps) {
  if (!pet) return null;

  return (
    <div style={{ 
      width: '100%'
    }}>
      {/* Seção de informações do pet */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '32px',
        marginBottom: '40px',
        borderRadius: '10px',
        padding: '24px'
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
  );
}

export default DeleteConfirmation;