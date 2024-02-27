import styles from "./petList.module.css";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

import { useState, useEffect } from "react";
import ModalRemove from "../ModalRemove/modalRemove";
import ModalEdit from "../ModalEdit/modalEdit";
import { Pet } from "@/types";

interface PetListProps {
  pets: Pet[];
  setPets: React.Dispatch<React.SetStateAction<Pet[]>>;
  searchTerm: string;
}

const PetList: React.FC<PetListProps> = ({ searchTerm }) => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPetIndex, setSelectedPetIndex] = useState<number>(-1);
  const [modalType, setModalType] = useState<"edit" | "remove">("edit");

  useEffect(() => {
    fetch("http://localhost:3000/pets")
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error("Error fetching pets:", error));
  }, []);

  const toggleActive = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const openModal = (index: number, type: "edit" | "remove") => {
    setModalOpen(true);
    const petIndex = indexOfFirstPet + index;
    setSelectedPetIndex(petIndex);
    setModalType(type);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPetIndex(-1);
  };

  const handleRemoveItem = () => {
    if (selectedPetIndex !== -1) {
      const selectedPet = filteredPets[selectedPetIndex];
      const updatedPets = pets.filter((pet) => pet.id !== selectedPet.id);
      setPets(updatedPets);
      console.log("Pet removido:", selectedPet);
      setSelectedPetIndex(-1);
    }
    closeModal();
  };

  const handleEditItem = (editedPet: Pet) => {
    if (selectedPetIndex !== -1) {
      const selectedPet = filteredPets[selectedPetIndex];
      const updatedPets = pets.map((pet) =>
        pet.id === selectedPet.id ? editedPet : pet
      );
      setPets(updatedPets);

      const updatedIndex =
        indexOfFirstPet +
        filteredPets.findIndex((pet) => pet.id === editedPet.id);
      if (updatedIndex !== -1) {
        const updatedPage = Math.ceil((updatedIndex + 1) / petsPerPage);
        setCurrentPage(updatedPage);
      }

      console.log("Pet editado:", selectedPet);
      setSelectedPetIndex(-1);
    }
    closeModal();
  };

  const calculateAge = (birthdate: string) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const formatBirthdate = (birthdate: string) => {
    const birthDate = new Date(birthdate);
    birthDate.setDate(birthDate.getDate() + 1);
    return birthDate.toLocaleDateString("pt-BR");
  };

  const filteredPets = pets.filter((pet) =>
    pet.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [petsPerPage] = useState(16);

  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const currentPets = filteredPets.slice(indexOfFirstPet, indexOfLastPet);

  useEffect(() => {
    if (selectedPetIndex !== -1 && selectedPetIndex >= filteredPets.length) {
      setSelectedPetIndex(-1);
    }
  }, [filteredPets]);

  useEffect(() => {
    if (selectedPetIndex !== -1) {
      const selectedPetId = pets[selectedPetIndex]?.id;
      const updatedIndex = filteredPets.findIndex(
        (pet) => pet.id === selectedPetId
      );
      if (updatedIndex === -1) {
        setSelectedPetIndex(-1);
      }
    }
  }, [pets, filteredPets]);

  const totalPages = Math.ceil(filteredPets.length / petsPerPage);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <section className={styles.container}>
      {currentPets.map((pet, index) => (
        <div
          key={pet.id}
          className={`${styles.item} ${
            activeIndex === index ? styles.activeItem : ""
          }`}
        >
          <div className={styles.circle}>
            <img src={`/${pet.animal.toLowerCase()}.svg`} alt="" />
          </div>
          <div className={styles.info}>
            <span>
              <img src="/bone.svg" alt="" />
              <p>{pet.nome}</p>
            </span>
            <span>
              <img src="/userLogo.svg" alt="" />
              <p>{pet.dono}</p>
            </span>
          </div>
          <img
            className={styles.arrow_icon}
            src="/arrow.svg"
            alt=""
            onClick={() => toggleActive(index)}
          />

          {activeIndex === index && (
            <div className={styles.active}>
              <span>
                <img src="/dna.svg" alt="" />
                Raça: {pet.raca}
              </span>
              <span>
                <img src="/telephone.svg" alt="" />
                Telefone: {pet.telefone}
              </span>
              <span>
                <img src="/calendar.svg" alt="" />
                Idade: {calculateAge(pet.dataNascimento)} Anos (
                {formatBirthdate(pet.dataNascimento)})
              </span>

              <button
                className={styles.button_change}
                onClick={() => openModal(index, "edit")}
              >
                <img src="/change.svg" alt="" />
                Editar
              </button>
              <button
                className={styles.button_remove}
                onClick={() => openModal(index, "remove")}
              >
                <img src="/trash.svg" alt="" />
                Remover
              </button>
            </div>
          )}
        </div>
      ))}
      {modalOpen && modalType === "remove" && (
        <ModalRemove
          petData={pets[selectedPetIndex]}
          onClose={closeModal}
          onRemoveItem={handleRemoveItem}
        />
      )}
      {modalOpen && modalType === "edit" && (
        <ModalEdit
          petData={pets[selectedPetIndex]}
          onClose={closeModal}
          onEditItem={handleEditItem}
          petsPerPage={petsPerPage}
          setCurrentPage={setCurrentPage}
          pets={pets}
        />
      )}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            className={styles.paginationButton}
            disabled={isFirstPage}
            onClick={() => paginate(currentPage - 1)}
          >
            <FaRegArrowAltCircleLeft className={styles.paginationButtonIcon} />
          </button>

          <span>
            {currentPage} de {totalPages}
          </span>

          <button
            className={styles.paginationButton}
            disabled={isLastPage}
            onClick={() => paginate(currentPage + 1)}
          >
            <FaRegArrowAltCircleRight className={styles.paginationButtonIcon} />
          </button>
        </div>
      )}
    </section>
  );
};

export default PetList;
