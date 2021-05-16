import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Header from "../../components/Header";
import PetForm from "../../components/PetForm";

import api from "../../services/api";

import styles from "./styles.module.css";

function UpdatePet() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPet, setSelectedPet] = useState({
    id: "",
    name: "",
    age: 0,
    type: "null",
    breed: "",
    owner: {
      name: "",
      contact: ""
    }
  });

  const { id } = useParams();

  useEffect(() => {
    async function fetchSelectedPet() {
      setIsLoading(true);

      const response = await api.get(`pet/${id}`);

      if (response.data.error) {
        return toast.error(response.data.message);
      }

      const { name, age, type, breed, owner } = response.data;

      setSelectedPet({
        id,
        name,
        age,
        type,
        breed,
        owner
      });
      setIsLoading(false);
    }

    fetchSelectedPet();
  }, [id]);

  return (
    <div className={styles.container}>
      <Header page="pets" />
      <h1>Alterar o pet</h1>
      {isLoading ? (
        <h1>Carregando...</h1>
      ) : (
        <PetForm
          method="update"
          data={{
            id: selectedPet.id,
            ownerContact: selectedPet.owner.contact,
            ownerName: selectedPet.owner.name,
            petAge: selectedPet.age,
            petBreed: selectedPet.breed,
            petName: selectedPet.name,
            petType: selectedPet.type
          }}
        />
      )}
    </div>
  );
}

export default UpdatePet;
