'use client';
import CadastrarPet from '@/app/components/cadastrarPet';
import Header from './components/header'
import PetList from '@/app/components/petlist';
import { useState } from 'react';

export default function App() { 
  const [buttonState, setButtonState] = useState(false);

  const toggleButtonState = () => {
    setButtonState(!buttonState);
  };
  const [pets, setPets] = useState([]);

  const handleCreatePet = (newPet) => {
    setPets([...pets, newPet]);
  };


  return (
    <div>
     <Header buttonState={buttonState} toggleButtonState={toggleButtonState} />
     <PetList pets={pets} />
     <CadastrarPet/> 
    </div>
  );
}
