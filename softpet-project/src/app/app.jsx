'use client';

import Header from '../components/header'
import PetList from '@/components/petlist';
import { useState } from 'react';



 
export default function App() { 
  const [buttonState, setButtonState] = useState(false);

  const toggleButtonState = () => {
    setButtonState(!buttonState);
  };

  return (
    <div>
     <Header buttonState={buttonState} toggleButtonState={toggleButtonState} />
     <PetList/>
    </div>
  );
}
