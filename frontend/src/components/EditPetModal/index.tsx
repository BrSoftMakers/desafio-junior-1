"use client";

import React, { useState } from "react";
import ModalComponent from "../Modal";
import { Dayjs } from "dayjs";
import iEditModal from "./iEditModal";

export default function EditPetModal({ open, onClose, petData }: iEditModal) {
  const [name, setName] = useState(petData.name);
  const [race, setRace] = useState(petData.race);
  const [animal, setAnimal] = useState(petData.animal);
  const [owner, setOwner] = useState(petData.owner);
  const [phone, setPhone] = useState(petData.phone);
  const [birthdate, setBirthdate] = useState<Dayjs | null>(petData.birthdate);

  const handleEdit = async () => {
    try {
      const response = await fetch(`http://localhost:3001/pets/${petData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, animal, race, owner, phone, birthdate }),
      });

      if (response.ok) {
        onClose();
      } else {
        console.error("Erro ao editar pet:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao editar pet:", error);
    }
  };

    return <ModalComponent
        open={open}
        onClose={onClose}
        petData={{ name, animal, race, owner, phone, birthdate }}
        setFunctions={{ setName, setAnimal, setRace, setOwner, setPhone, setBirthdate }}
        handleFunction={handleEdit}
        modalFunction={"Editar"}
    />;
}
