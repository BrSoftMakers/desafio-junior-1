"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header/header";
import SearchForm from "@/components/SearchForm/searchForm";
import Modal from "@/components/ModalRegister/modal";
import PetList from "@/components/PetList/petList";
import { Pet } from "@/types";

const Page: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/pets")
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error("Error fetching pets:", error));
  }, []);

  

  const handleAddPet = (newPet: Pet) => {
    setPets((prevPets) => [...prevPets, newPet]);
    setModalOpen(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
        rel="stylesheet"
      />
      <Header />
      <main>
        <SearchForm
          handleOpenModal={handleOpenModal}
          onAddPet={handleAddPet}
          onSearch={handleSearch}
        />
        {modalOpen && (
          <Modal
            onAddPet={handleAddPet}
            onClose={handleCloseModal}
          />
        )}

        <PetList pets={pets} setPets={setPets} searchTerm={searchTerm} />
      </main>
    </div>
  );
};

export default Page;
