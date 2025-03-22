"use client";

import { useState } from "react";
import iModalOpen from "../Modal/iModalOpen";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/pt-br";
import ModalComponent from "../Modal";

export default function RegisterNewPetModal({
  open,
  onClose,
}: iModalOpen) {
  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [animal, setAnimal] = useState("Cachorro");
  const [owner, setOwner] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState<Dayjs | null>(dayjs());

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3001/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, animal, race, owner, phone, birthdate }),
      });

      if (response.ok) {
        setName("")
        setRace("")
        setAnimal("Cachorro")
        setOwner("")
        setPhone("")
        setBirthdate(dayjs())
        onClose();
      } else {
        console.error("Erro ao cadastrar pet:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao cadastrar pet:", error);
    }
  };

  return (
    <ModalComponent
      open={open}
      onClose={onClose}
      petData={{ name, animal, race, owner, phone, birthdate }}
      setFunctions={{ setName, setAnimal, setRace, setOwner, setPhone, setBirthdate }}
      handleFunction={handleRegister}
      modalFunction={"Cadastrar"}
    />
  );
}
