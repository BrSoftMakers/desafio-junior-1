import { FC, useState } from "react";
import styles from "./modalEdit.module.css";
import { IoArrowBackCircleOutline, IoClose } from "react-icons/io5";
import { Pet } from "@/types";

interface ModalEditProps {
  petData: Pet;
  onClose: () => void;
  onEditItem: (editedPet: Pet) => void;
  petsPerPage: number;
  setCurrentPage: (pageNumber: number) => void;
  pets: Pet[]
}

const ModalEdit: FC<ModalEditProps> = ({ onClose, onEditItem, petData, petsPerPage, setCurrentPage, pets }) => {
  const [formData, setFormData] = useState<Pet>(petData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      animal: value as "Cachorro" | "Gato",
    }));
  };

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, "");
    const match = phoneNumber.match(/^(\d{2})(\d{1})(\d{4})(\d{4})$/);

    if (match) {
      return `(${match[1]}) ${match[2]} ${match[3]}-${match[4]}`;
    }

    return value;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const formattedValue = formatPhoneNumber(value);
    setFormData((prevState) => ({
      ...prevState,
      telefone: formattedValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/pets/${petData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to update pet");
      }
      onEditItem(formData);

      const updatedIndex = pets.findIndex((pet) => pet.id === petData.id);
      const currentPageIndex = Math.floor(updatedIndex / petsPerPage);
      setCurrentPage(currentPageIndex + 1);
      

      onClose();
    } catch (error) {
      console.error("Error updating pet:", error);
    }
  };

  return (
    <div className={styles.register_animal_container}>
      <div className={styles.register_animal}>
        <div className={styles.header_animal}>
        <div className={styles.div_circle}>
        <img src="/changeFFF.svg" alt="" />
          </div>
          <h1>Editar</h1>
          <button className={styles.button_icon} onClick={onClose}>
            <IoClose />
          </button>
        </div>

        <form className={styles.form_modal} onSubmit={handleSubmit}>
          <div className={styles.form_section}>
            <div>
              <label>
                <img className={styles.bone} src="/bone.svg" alt="" /> Nome
              </label>
              <input
                type="text"
                placeholder="Nome Sobrenome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>
                <img src="/userLogo.svg" alt="" /> Dono
              </label>
              <input
                type="text"
                placeholder="Nome Sobrenome"
                name="dono"
                value={formData.dono}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>
                <img className={styles.phone} src="/telephone.svg" alt="" />
                Telefone
              </label>
              <input
                type="text"
                name="telefone"
                value={formData.telefone}
                onChange={handlePhoneChange}
                placeholder="(00) 0 0000-0000"
              />
            </div>
          </div>
          <div className={styles.form_section}>
            <div>
              <label>
                <img className={styles.dna} src="/dna.svg" alt="" />
                Animal
              </label>
              <div className={styles.radio}>
                <span>
                  <input
                    type="radio"
                    id="cachorro"
                    name="animal"
                    value="Cachorro"
                    checked={formData.animal === "Cachorro"}
                    onChange={handleRadioChange}
                  />
                  <label>Cachorro</label>
                </span>
                <span>
                  <input
                    type="radio"
                    id="gato"
                    name="animal"
                    value="Gato"
                    checked={formData.animal === "Gato"}
                    onChange={handleRadioChange}
                  />
                  <label>Gato</label>
                </span>
              </div>
            </div>
            <div>
              <label>
                <img className={styles.dna} src="/dna.svg" alt="" />
                Raça
              </label>
              <input
                type="text"
                placeholder="Raça"
                name="raca"
                value={formData.raca}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>
                <img className={styles.calendar} src="/calendar.svg" alt="" />
                Nascimento <span>(Aproximado)</span>
              </label>
              <input
                type="date"
                placeholder="22/08/2020"
                name="dataNascimento"
                value={formData.dataNascimento}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.register_buttons}>
            <button onClick={onClose} className={styles.back_button}>
              <IoArrowBackCircleOutline size={25} />
              Voltar
            </button>
            <button type="submit" className={styles.button_register_modal}>
            <img src="/changeFFF.svg" alt="" />
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEdit;
