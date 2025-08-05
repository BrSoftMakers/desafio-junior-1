import { useState } from 'react';
import Image from 'next/image';
import { Pet } from '../types/pet.d';

interface PetCardProps {
  pet: Pet;
  onEdit: (pet: Pet) => void;
  onDelete: (pet: Pet) => void;
}

const PetIcon = ({ tipo, petId }: { tipo: string; petId?: string }) => {
  const uniqueId = `${tipo}_${petId || Math.random().toString(36).substr(2, 9)}`;
  const gradientId = `paint0_linear_${uniqueId}`;
  
  if (tipo.toLowerCase() === 'gato') {
    return (
      <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32.5" cy="32.5" r="32.5" fill={`url(#${gradientId})`}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M38.9132 50.2237H25.9458C25.8268 50.2237 25.7078 50.1761 25.6127 50.1047L16.4522 42.2767C16.3094 42.1577 16.2618 41.9674 16.2856 41.8008L18.7364 28.8572L19.8546 15.0332C19.8784 14.819 20.0212 14.6287 20.2353 14.5811C20.4495 14.5335 20.6874 14.6287 20.8064 14.819L24.8275 21.6002C26.3027 21.0291 31.561 19.4825 40.0077 21.6478L44.0526 14.819C44.1716 14.6287 44.3857 14.5335 44.5999 14.5811C44.814 14.6287 44.9806 14.819 45.0043 15.0332L46.0988 28.8572L48.5496 41.8008C48.5971 41.9674 48.5258 42.1577 48.383 42.2767L39.2225 50.1047C39.1512 50.1761 39.0322 50.2237 38.9132 50.2237ZM26.1361 49.2006H38.7229L47.5027 41.6819L45.0995 29.0237C45.0995 29.0079 45.0995 28.992 45.0995 28.9761L44.1002 16.7225L40.6739 22.4805C40.555 22.6947 40.3408 22.7898 40.1029 22.7185C35.0349 21.3622 31.1328 21.4336 28.7772 21.7191C26.2075 22.0285 24.8275 22.6709 24.8275 22.6947C24.5896 22.7898 24.304 22.7185 24.1613 22.4805L20.735 16.7225L19.7595 28.9761C19.7436 28.992 19.7357 29.0079 19.7357 29.0237L17.3325 41.6819L26.1361 49.2006Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M32.4175 39.9925C32.2986 39.9925 32.1558 39.9449 32.0606 39.8497L29.0865 36.8755C28.9437 36.7328 28.8961 36.5186 28.9913 36.3283C29.0627 36.1379 29.253 36.019 29.4672 36.019H35.3917C35.6059 36.019 35.7724 36.1379 35.8676 36.3283C35.939 36.5186 35.8914 36.7328 35.7486 36.8755L32.7744 39.8497C32.6793 39.9449 32.5603 39.9925 32.4175 39.9925ZM30.6806 37.0421L32.4175 38.779L34.1545 37.0421H30.6806Z" fill="white"/>
        <defs>
          <linearGradient id={gradientId} x1="-1.69976e-07" y1="33.0328" x2="65" y2="33.0328" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00CAFC"/>
            <stop offset="1" stopColor="#0056E2"/>
          </linearGradient>
        </defs>
      </svg>
    );
  } else {
    return (
      <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32.5" cy="32.5" r="32.5" fill={`url(#${gradientId})`}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M32.1527 36.6246C32.0234 36.6246 31.8683 36.547 31.7649 36.4436L26.3875 31.0921C26.2324 30.937 26.1807 30.6785 26.2841 30.4716C26.3617 30.2648 26.5685 30.1356 26.7753 30.1356H37.53C37.7627 30.1356 37.9437 30.2648 38.0471 30.4716C38.1246 30.6785 38.0729 30.937 37.9178 31.0921L32.5405 36.4436C32.437 36.547 32.3078 36.6246 32.1527 36.6246ZM28.1197 31.2472L32.1527 35.2802L36.1857 31.2472H28.1197Z" fill="white"/>
        <path d="M32.1526 38.2275C31.8424 38.2275 31.6097 37.9948 31.6097 37.6846V36.0559C31.6097 35.7715 31.8424 35.5129 32.1526 35.5129C32.4629 35.5129 32.7214 35.7715 32.7214 36.0559V37.6846C32.7214 37.9948 32.4629 38.2275 32.1526 38.2275Z" fill="white"/>
        <defs>
          <linearGradient id={gradientId} x1="-1.69976e-07" y1="33.0328" x2="65" y2="33.0328" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00CAFC"/>
            <stop offset="1" stopColor="#0056E2"/>
          </linearGradient>
        </defs>
      </svg>
    );
  }
};

export default function PetCard({ pet, onEdit, onDelete }: PetCardProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative group">
      {/* Card Principal - 300x95px conforme design original */}
      <div 
        className="w-[300px] h-[95px] rounded-[10px] bg-gradient-to-r from-[#000814] to-[#001E4D] border border-[#00CAFC]/30 p-3 flex items-center hover:shadow-lg transition-all duration-300 relative"
        style={{ width: '300px', height: '95px' }}
      >
        {/* Ícone do Pet - Canto esquerdo (65px com imagens dos assets) */}
        <div className="flex-shrink-0 mr-4">
          <PetIcon tipo={pet.tipo} petId={pet.id.toString()} />
        </div>

        {/* Informações do Pet - Area central */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          {/* Nome do Pet com ícone de coleira */}
          <div className="flex items-center gap-2 mb-1">
            <Image 
              src="/coleira.png" 
              alt="Coleira do Pet" 
              width={16}
              height={16}
              className="flex-shrink-0"
            />
            <h3 
              className="text-white truncate"
              style={{
                fontSize: '18px',
                fontWeight: '600',
                fontFamily: 'Ubuntu, sans-serif',
                lineHeight: '100%',
                color: '#FFFFFF'
              }}
            >
              {pet.nome}
            </h3>
          </div>
          
          {/* Nome do Dono com ícone de perfil */}
          <div className="flex items-center gap-2">
            <Image 
              src="/perfil.png" 
              alt="Perfil do Dono" 
              width={16}
              height={16}
              className="flex-shrink-0"
            />
            <p 
              className="truncate"
              style={{
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: 'Ubuntu, sans-serif',
                lineHeight: '100%',
                color: 'rgba(255, 255, 255, 0.8)'
              }}
            >
              {pet.dono?.nome}
            </p>
          </div>
        </div>

        {/* Botão de seta (dropdown) - canto direito sempre visível */}
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-200"
        >
          <Image 
            src="/seta.png" 
            alt="Menu" 
            width={20}
            height={11.52}
            className="flex-shrink-0"
          />
        </button>

        {/* Dropdown Menu */}
        {showDropdown && (
          <div className="absolute top-12 right-0 bg-gradient-to-br from-[#001E4D] to-[#000814] rounded-lg shadow-lg border border-[#00CAFC]/30 z-10 min-w-[120px] backdrop-blur-sm">
            <button
              onClick={() => {
                onEdit(pet);
                setShowDropdown(false);
              }}
              className="w-full px-3 py-2 text-left hover:bg-[#00CAFC]/20 rounded-t-lg flex items-center gap-2 transition-colors duration-200"
              style={{
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: 'Ubuntu, sans-serif',
                lineHeight: '100%',
                color: '#FFFFFF'
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Editar
            </button>
            <button
              onClick={() => {
                onDelete(pet);
                setShowDropdown(false);
              }}
              className="w-full px-3 py-2 text-left hover:bg-red-500/20 rounded-b-lg flex items-center gap-2 transition-colors duration-200"
              style={{
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: 'Ubuntu, sans-serif',
                lineHeight: '100%',
                color: '#FF6B6B'
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Excluir
            </button>
          </div>
        )}
      </div>

      {/* Overlay para fechar dropdown quando clicar fora */}
      {showDropdown && (
        <div
          className="fixed inset-0 z-5"
          onClick={() => setShowDropdown(false)}
        />
      )}
    </div>
  );
}
