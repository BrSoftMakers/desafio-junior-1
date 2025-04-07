"use client";

import { useEffect, useState } from "react";
import { RegisterProps } from "../interfaces";
import { deletePet, editPet, getAllPets } from "../services";
import { useAuth } from "../context/AuthContext";
import PetCard from "./petCard";
import PetForm from "./petForm";

export default function PetList() {
  const { petsList, setPetsList, aux, filteredPets } = useAuth();

  const [openCardId, setOpenCardId] = useState<number | null>(null);
  const [formPet, setFormPet] = useState<RegisterProps | null>(null);
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const [title, setTitle] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  const fetchPets = async () => {
    try {
      const data = await getAllPets();
      if (Array.isArray(data)) setPetsList(data);
      else setPetsList([]);
    } catch (error) {
      console.error("Erro ao buscar pets:", error);
      setPetsList([]);
    }
  };

  useEffect(() => {
    fetchPets();
  }, [aux]);

  const handleToggle = (id: number) => {
    setOpenCardId((prevId) => (prevId === id ? null : id));
    setFormPet(null); // limpa o formulário quando abre/fecha
  };

  const handleSeeDetails = (pet : RegisterProps) => {
    setTitle("Ver pet")
    setReadOnly(true)
    setFormPet(pet);
    setOpenCardId(pet.id ?? null);
  }

  const handleEditClick = (pet: RegisterProps) => {
    setTitle("Edtiar pet")
    setReadOnly(false)
    setFormPet(pet);
    setOpenCardId(pet.id ?? null);
  };

  const handleSave = async (data: RegisterProps) => {
    try {
      await editPet(data);
      fetchPets();
      if (title === "Edtiar pet") alert("Pet atualizado!");
      setFormPet(null);
      setOpenCardId(null);
    } catch (error) {
      console.error("Erro ao editar pet:", error);
    }
  };

  const handleRemove = async (pet: RegisterProps) => {
    try {
      await deletePet(pet);
      fetchPets();
      alert("Pet removido!");
    } catch (error) {
      console.error("Erro ao remover pet:", error);
    }
  };

  const handleCancel = () => {
    setFormPet(null);
    setOpenCardId(null);
  };

  const dataToDisplay = Array.isArray(filteredPets) && filteredPets.length > 0 ? filteredPets : petsList ?? [];
  const totalPages = Math.ceil(dataToDisplay.length / itemsPerPage);
  const currentPets = dataToDisplay.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      <section className="w-4/5 mx-auto flex flex-wrap justify-center gap-4 pt-4">
        <div className="flex flex-wrap justify-start gap-4">
          {currentPets.map((pet) => (
            <div key={pet.id} className="flex flex-col gap-2">
              <PetCard
                pet={pet}
                isOpen={openCardId === pet.id}
                onToggle={handleToggle}
                onEdit={handleEditClick} // agora só abre o form
                onRemove={handleRemove}
                onDetails={handleSeeDetails}
              />

              {formPet && openCardId === pet.id && (
                <PetForm
                  title={title}
                  initialData={formPet}
                  onSave={handleSave}
                  onClose={handleCancel}
                  onCancel={handleCancel}
                  readOnly={readOnly}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'} hover:opacity-80 cursor-pointer`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
}
