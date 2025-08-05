'use client';

import { useState, useEffect } from 'react';
import { Pet } from '../types/pet.d';

interface PetFormProps {
  pet: Pet | null;
  onSubmit: (petData: Pet) => void;
}

function PetForm({ pet, onSubmit }: PetFormProps) {
  const [formData, setFormData] = useState({
    nome: '',
    dono: {
      nome: '',
      telefone: '',
      endereco: ''
    },
    tipo: '',
    raca: '',
    nascimento: '22/08/2020'
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    if (pet) {
      setFormData({
        nome: pet.nome || '',
        dono: {
          nome: pet.dono?.nome || '',
          telefone: pet.dono?.telefone || '',
          endereco: pet.dono?.endereco || ''
        },
        tipo: pet.tipo || '',
        raca: pet.raca || '',
        nascimento: '22/08/2020'
      });
    }
  }, [pet]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const petData: Pet = {
      id: pet?.id || 0,
      nome: formData.nome,
      tipo: formData.tipo as 'cachorro' | 'gato',
      raca: formData.raca,
      idade: 2,
      donoId: pet?.donoId || 0,
      dono: {
        id: pet?.dono?.id || 0,
        nome: formData.dono.nome,
        telefone: formData.dono.telefone,
        endereco: formData.dono.endereco
      }
    };

    onSubmit(petData);
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  const renderCalendar = () => {
    const currentMonth = 7;
    const currentYear = 2020;
    const daysInMonth = getDaysInMonth(currentMonth + 1, currentYear);
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    
    const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                       'July', 'August', 'September', 'October', 'November', 'December'];
    
    return (
      <div style={{
        position: 'absolute',
        top: '100%',
        left: '0',
        zIndex: 1000,
        background: '#1A2436',
        border: '1px solid #4A5568',
        borderRadius: '8px',
        padding: '16px',
        width: '280px',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)'
      }}>
        {/* Header do calendário */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
          color: '#FFFFFF',
          fontSize: '14px',
          fontWeight: '600',
          fontFamily: 'Ubuntu'
        }}>
          <button type="button" style={{ 
            background: 'none', 
            border: 'none', 
            color: '#FFFFFF', 
            cursor: 'pointer',
            fontSize: '18px',
            padding: '4px 8px'
          }}>‹</button>
          <span>{monthNames[currentMonth]} {currentYear}</span>
          <button type="button" style={{ 
            background: 'none', 
            border: 'none', 
            color: '#FFFFFF', 
            cursor: 'pointer',
            fontSize: '18px',
            padding: '4px 8px'
          }}>›</button>
        </div>
        
        {/* Dias da semana */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(7, 1fr)', 
          gap: '4px', 
          marginBottom: '8px' 
        }}>
          {daysOfWeek.map(day => (
            <div key={day} style={{
              textAlign: 'center',
              color: '#9CA3AF',
              fontSize: '12px',
              fontWeight: '500',
              fontFamily: 'Ubuntu',
              padding: '4px'
            }}>
              {day}
            </div>
          ))}
        </div>
        
        {/* Dias do mês */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px' }}>
          {/* Espaços vazios para o primeiro dia do mês */}
          {Array.from({ length: firstDay }, (_, i) => (
            <div key={`empty-${i}`} style={{ width: '32px', height: '32px' }}></div>
          ))}
          
          {/* Dias do mês */}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const isSelected = day === 22;
            
            return (
              <button
                key={day}
                type="button"
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    nascimento: `22/08/2020`
                  }));
                  setShowDatePicker(false);
                }}
                style={{
                  width: '32px',
                  height: '32px',
                  border: 'none',
                  borderRadius: '4px',
                  background: isSelected ? '#0056E2' : 'transparent',
                  color: isSelected ? '#FFFFFF' : '#E2E8F0',
                  fontSize: '12px',
                  fontFamily: 'Ubuntu',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.background = 'rgba(0, 86, 226, 0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div style={{ 
      position: 'relative',
      width: '100%', 
      height: '420px',
      paddingTop: '20px'
    }}>
      <form onSubmit={handleSubmit}>
        {/* Container principal - Group 37 conforme CSS */}
        <div style={{
          position: 'relative',
          width: '495px',
          height: '223px',
          margin: '0 auto'
        }}>
          {/* Coluna esquerda - Group 36 */}
          <div style={{
            position: 'absolute',
            width: '231px',
            height: '223px',
            left: '0px',
            top: '0px'
          }}>
            {/* Nome - Group 24 */}
            <div style={{
              position: 'absolute',
              width: '231px',
              height: '65px',
              left: '0px',
              top: '0px'
            }}>
              {/* Label Nome */}
              <div style={{
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                left: '0px',
                top: '0px'
              }}>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#FFFFFF" 
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span style={{
                  fontFamily: 'Ubuntu',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '18px',
                  color: '#FFFFFF'
                }}>
                  Nome
                </span>
              </div>
              
              {/* Input Nome - Rectangle 20 */}
              <input
                type="text"
                placeholder="Nome Sobrenome"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                style={{
                  boxSizing: 'border-box',
                  position: 'absolute',
                  width: '231px',
                  height: '39px',
                  left: '0px',
                  top: '26px',
                  border: '3px solid #404A5C',
                  borderRadius: '10px',
                  background: 'transparent',
                  padding: '0 16px',
                  fontFamily: 'Ubuntu',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '18px',
                  color: '#404A5C',
                  outline: 'none'
                }}
              />
            </div>

            {/* Dono - Group 25 */}
            <div style={{
              position: 'absolute',
              width: '231px',
              height: '65px',
              left: '0px',
              top: '79px'
            }}>
              {/* Label Dono */}
              <div style={{
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                left: '0px',
                top: '0px'
              }}>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#FFFFFF" 
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span style={{
                  fontFamily: 'Ubuntu',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '18px',
                  color: '#FFFFFF'
                }}>
                  Dono
                </span>
              </div>
              
              {/* Input Dono */}
              <input
                type="text"
                placeholder="Nome Sobrenome"
                value={formData.dono.nome}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  dono: { ...formData.dono, nome: e.target.value }
                })}
                style={{
                  boxSizing: 'border-box',
                  position: 'absolute',
                  width: '231px',
                  height: '39px',
                  left: '0px',
                  top: '26px',
                  border: '3px solid #404A5C',
                  borderRadius: '10px',
                  background: 'transparent',
                  padding: '0 16px',
                  fontFamily: 'Ubuntu',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '18px',
                  color: '#404A5C',
                  outline: 'none'
                }}
              />
            </div>

            {/* Telefone - Group 32 */}
            <div style={{
              position: 'absolute',
              width: '231px',
              height: '65px',
              left: '0px',
              top: '158px'
            }}>
              {/* Label Telefone */}
              <div style={{
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                left: '0px',
                top: '0px'
              }}>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#FFFFFF" 
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span style={{
                  fontFamily: 'Ubuntu',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '18px',
                  color: '#FFFFFF'
                }}>
                  Telefone
                </span>
              </div>
              
              {/* Input Telefone */}
              <input
                type="text"
                placeholder="(00) 0 0000-0000"
                value={formData.dono.telefone}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  dono: { ...formData.dono, telefone: e.target.value }
                })}
                style={{
                  boxSizing: 'border-box',
                  position: 'absolute',
                  width: '231px',
                  height: '39px',
                  left: '0px',
                  top: '26px',
                  border: '3px solid #404A5C',
                  borderRadius: '10px',
                  background: 'transparent',
                  padding: '0 16px',
                  fontFamily: 'Ubuntu',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '18px',
                  color: '#404A5C',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Coluna direita - Group 35 */}
          <div style={{
            position: 'absolute',
            width: '231px',
            height: '223px',
            left: '264px',
            top: '0px'
          }}>
            {/* Animal - Group 34 */}
            <div style={{
              position: 'absolute',
              width: '231px',
              height: '66px',
              left: '0px',
              top: '0px'
            }}>
              {/* Label Animal */}
              <div style={{
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                left: '0px',
                top: '0px'
              }}>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#FFFFFF" 
                  strokeWidth="2"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4z"></path>
                </svg>
                <span style={{
                  fontFamily: 'Ubuntu',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '18px',
                  color: '#FFFFFF'
                }}>
                  Animal
                </span>
              </div>
              
              {/* Radio buttons container */}
              <div style={{ 
                position: 'absolute',
                top: '26px',
                left: '0px',
                display: 'flex',
                gap: '9px'
              }}>
                {/* Cachorro - Group 28 */}
                <label 
                  style={{ cursor: 'pointer' }}
                  onClick={() => setFormData({ ...formData, tipo: 'cachorro' })}
                >
                  <div style={{
                    boxSizing: 'border-box',
                    position: 'relative',
                    width: '111px',
                    height: '39px',
                    border: formData.tipo === 'cachorro' ? '3px solid #FFFFFF' : '3px solid #404A5C',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '28px',
                    gap: '8px'
                  }}>
                    {/* Radio circle - Ellipse 8 */}
                    <div style={{
                      position: 'absolute',
                      width: '12px',
                      height: '12px',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      borderRadius: '50%',
                      background: formData.tipo === 'cachorro' ? '#FFFFFF' : 'transparent',
                      border: formData.tipo === 'cachorro' ? 'none' : '2px solid #404A5C'
                    }} />
                    
                    <span style={{
                      fontFamily: 'Ubuntu',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '18px',
                      color: formData.tipo === 'cachorro' ? '#FFFFFF' : '#404A5C'
                    }}>
                      Cachorro
                    </span>
                  </div>
                  <input
                    type="radio"
                    name="tipo"
                    value="cachorro"
                    checked={formData.tipo === 'cachorro'}
                    onChange={() => {}}
                    style={{ display: 'none' }}
                  />
                </label>
                
                {/* Gato - Group 29 */}
                <label 
                  style={{ cursor: 'pointer' }}
                  onClick={() => setFormData({ ...formData, tipo: 'gato' })}
                >
                  <div style={{
                    boxSizing: 'border-box',
                    position: 'relative',
                    width: '111px',
                    height: '39px',
                    border: formData.tipo === 'gato' ? '3px solid #FFFFFF' : '3px solid #404A5C',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '28px',
                    gap: '8px'
                  }}>
                    {/* Radio circle - Ellipse 8 */}
                    <div style={{
                      position: 'absolute',
                      width: '12px',
                      height: '12px',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      borderRadius: '50%',
                      background: formData.tipo === 'gato' ? '#FFFFFF' : 'transparent',
                      border: formData.tipo === 'gato' ? 'none' : '2px solid #404A5C'
                    }} />
                    
                    <span style={{
                      fontFamily: 'Ubuntu',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '18px',
                      color: formData.tipo === 'gato' ? '#FFFFFF' : '#404A5C'
                    }}>
                      Gato
                    </span>
                  </div>
                  <input
                    type="radio"
                    name="tipo"
                    value="gato"
                    checked={formData.tipo === 'gato'}
                    onChange={() => {}}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>
            </div>

            {/* Raça - Group 27 */}
            <div style={{
              position: 'absolute',
              width: '231px',
              height: '65px',
              left: '0px',
              top: '79px'
            }}>
              {/* Label Raça */}
              <div style={{
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                left: '0px',
                top: '0px'
              }}>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#FFFFFF" 
                  strokeWidth="2"
                >
                  <circle cx="11" cy="4" r="2"></circle>
                  <circle cx="18" cy="8" r="2"></circle>
                  <circle cx="20" cy="16" r="2"></circle>
                  <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"></path>
                </svg>
                <span style={{
                  fontFamily: 'Ubuntu',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '18px',
                  color: '#FFFFFF'
                }}>
                  Raça
                </span>
              </div>
              
              {/* Input Raça */}
              <input
                type="text"
                placeholder="Raça"
                value={formData.raca}
                onChange={(e) => setFormData({ ...formData, raca: e.target.value })}
                style={{
                  boxSizing: 'border-box',
                  position: 'absolute',
                  width: '231px',
                  height: '39px',
                  left: '0px',
                  top: '26px',
                  border: '3px solid #404A5C',
                  borderRadius: '10px',
                  background: 'transparent',
                  padding: '0 16px',
                  fontFamily: 'Ubuntu',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '18px',
                  color: '#404A5C',
                  outline: 'none'
                }}
              />
            </div>

            {/* Nascimento - Group 33 */}
            <div style={{
              position: 'absolute',
              width: '231px',
              height: '65px',
              left: '0px',
              top: '158px'
            }}>
              {/* Label Nascimento */}
              <div style={{
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                left: '0px',
                top: '0px'
              }}>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#FFFFFF" 
                  strokeWidth="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span style={{
                  fontFamily: 'Ubuntu',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '18px',
                  color: '#FFFFFF'
                }}>
                  Nascimento
                </span>
                <span style={{
                  fontFamily: 'Ubuntu',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: '16px',
                  lineHeight: '18px',
                  color: '#404A5C'
                }}>
                  (Aproximado)
                </span>
              </div>
              
              {/* Input/Button Nascimento */}
              <div style={{ position: 'relative' }}>
                <button
                  type="button"
                  onClick={() => setShowDatePicker(!showDatePicker)}
                  style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    width: '231px',
                    height: '39px',
                    left: '0px',
                    top: '26px',
                    border: '3px solid #404A5C',
                    borderRadius: '10px',
                    background: 'transparent',
                    padding: '0 16px',
                    fontFamily: 'Ubuntu',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '18px',
                    color: '#404A5C',
                    outline: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span>{formData.nascimento}</span>
                  <svg 
                    width="12" 
                    height="12" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#404A5C" 
                    strokeWidth="2"
                    style={{
                      transform: showDatePicker ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s'
                    }}
                  >
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>
                {showDatePicker && renderCalendar()}
              </div>
            </div>
          </div>
        </div>
      </form>
      
      {/* Overlay para fechar calendário */}
      {showDatePicker && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999
          }}
          onClick={() => setShowDatePicker(false)}
        />
      )}
    </div>
  );
}

export default PetForm;