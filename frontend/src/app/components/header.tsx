"use client";

import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import PetForm from "./petForm";
import { createNewPet } from "../services";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { petsList, setFilteredPets } = useAuth();

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);

  const handleSearch = () => {
    if (!isFiltering) {
      const filtered = petsList?.filter((pet) =>
        pet.name.toLowerCase().includes(search.toLowerCase()) ||
        pet.customerName.toLowerCase().includes(search.toLowerCase())
      ) ?? [];

      setFilteredPets(filtered);
      setIsFiltering(true);
      setSearch("");
    } else {
      setFilteredPets(petsList ?? []);
      setIsFiltering(false);
    }
  };

  const registerNewPet = () => {
    setShowForm(true);
  };

  return (
    <header className="flex flex-col w-4/5 mx-auto p-4">
      <h1 className="text-white text-xl font-semibold mb-2">SoftPet</h1>
      <div className="flex justify-between items-center w-full">
        <div id="input" className="flex items-center border-3 border-[#404a5c] rounded-lg overflow-hidden w-2/3">
          <div id="icon" className="flex items-center justify-center px-2 py-2 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#404a5c" viewBox="0 0 24 24">
              <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
            </svg>
          </div>
          <input
            id="search"
            type="text"
            placeholder="Buscar..."
            className="flex-1 px-4 py-2 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="p-1">
            <button
              id="pesquisar"
              className="text-white bg-[#404a5c] px-4 py-2 hover:opacity-80 rounded-full cursor-pointer"
              onClick={handleSearch}
            >
              {isFiltering ? "Limpar" : "Pesquisar"}
            </button>
          </div>
        </div>

        <button
          onClick={registerNewPet}
          className="flex items-center gap-2 px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-[#00c0f9] to-[#0063e4] hover:opacity-90 transition cursor-pointer"
        >
          <span className="flex items-center justify-center w-6 h-6 border border-white rounded-full">
            <Plus size={16} className="text-white" />
          </span>
          <span>Cadastrar</span>
        </button>
      </div>

      {showForm && (
        <PetForm
          onClose={() => setShowForm(false)}
          onSave={createNewPet}
          title="Cadastro de Pet"
          initialData={undefined}
        />
      )}
    </header>
  );
}
