'use client';

import AnimalCard from "@/components/AnimalCards";
import listPets from '@/utils/listPets';
import { useState, useEffect } from "react";
import CadastroModal from "./CadastroModal";
import EditarModal from "./EditarModal";
import Image from 'next/image';


export default function HomeClient() {
  const [pets, setPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isCadastroModalOpen, setIsCadastroModalOpen] = useState(false);
  const [isEditarModalOpen, setIsEditarModalOpen] = useState(false);
  const [petToEdit, setPetToEdit] = useState(null);

  useEffect(() => {
    async function fetchPets() {
      const petsData = await listPets();
      setPets(petsData);
    }
    fetchPets();
  }, []);

  const filteredPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openCadastroModal = () => {
    setIsCadastroModalOpen(true);
  };

  const closeCadastroModal = () => {
    setIsCadastroModalOpen(false);
  };

  const openEditarModal = (pet) => {
    setPetToEdit(pet);
    setIsEditarModalOpen(true);
  };

  const closeEditarModal = () => {
    setIsEditarModalOpen(false);
  };

  return (
    <div style={{
      textAlign: "center",
      background: "linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)",
      minHeight: "100vh",
      padding: "20px",
      color: "white",
    }}>

  <div style={{ display: 'flex', alignItems: 'center',marginTop: '40px', marginLeft: '55px' }}>
    <div style={{ marginRight: '10px' }}>
    <Image src="/logo.svg" alt="Logo" width={61} height={48} />
    </div>
    <h1 style={{ fontSize: '30px', textAlign: 'left', margin: 0 }}>SoftPet</h1>
  </div>    
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <div style={{ position: "relative", width: "50%", display: "flex", top: "50px", }}>
          <input
            type="text"
            placeholder="   Pesquisar..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{
              width: "100%", 
              background: "linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)", 
              height: "50px",
              border: " solid 3px",
              borderColor: "grey",
              borderRadius: "4em",
              textAlign: "center"
            }}
          />
        </div>
        <button 
          style={{ 
            position: "relative",
            top: '50px',
            padding: "5px 10px",
            marginLeft: 10, 
            backgroundColor: "#007bff", 
            border: "none", 
            borderRadius: "4em", 
            cursor: "pointer",
          }}
         onClick={openCadastroModal}>Cadastrar</button>
        <CadastroModal isOpen={isCadastroModalOpen} onClose={closeCadastroModal}/>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", border: 'none', marginTop: '100px' }}>
        {filteredPets.map(pet => (
          <div key={pet.id} style={{ width: 300, height: 95, margin: 10,top: '246px' }}>
            <AnimalCard pet={pet} handleEdit={openEditarModal} />
          </div>
        ))}
      </div>
      <EditarModal isOpen={isEditarModalOpen} onClose={closeEditarModal} petToEdit={petToEdit}/>
    </div>
  );
}
