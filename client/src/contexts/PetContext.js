import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import api from "../services/api";

export const PetContext = createContext();

export function usePet() {
  return useContext(PetContext);
}

export function PetContainer({ children }) {
  const [pets, setPets] = useState([]);
  const [totalPets, setTotalPets] = useState(0);
  const [page, setPage] = useState(1);
  const [_, force] = useState(false);

  function updatePage(page) {
    setPage(page);
  }

  async function deletePet(id) {
    const response = await api.delete(`pet/${id}`);

    if (response.data.error) {
      return toast.error(response.data.message);
    }

    toast.success(response.data.message);

    setTotalPets(totalPets - 1);
    setPets(pets.filter(pet => pet.id !== id));
    setPage(1);
  }

  async function deleteManyPets(ids) {
    ids.forEach(async id => {
      const response = await api.delete(`pet/${id}`);

      if (response.data.error) {
        return toast.error(response.data.message);
      }

      toast.success(response.data.message);
    });

    setTotalPets(totalPets - ids.length);
    setPets(pets.filter(pet => !ids.includes(pet.id)));
    refresh();
  }

  function refresh() {
    force(v => !v);
  }

  useEffect(() => {
    async function fetchPets() {
      const response = await api.get(`pets?page=${page}`);

      setTotalPets(response.data.totalItems);
      setPets(response.data.items);
    }

    fetchPets();
  }, [_, page]);

  return (
    <PetContext.Provider
      value={{
        pets,
        totalPets,
        page,
        updatePage,
        deletePet,
        deleteManyPets,
        refresh
      }}
    >
      {children}
    </PetContext.Provider>
  );
}
