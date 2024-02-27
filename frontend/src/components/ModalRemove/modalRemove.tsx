import { FC, useState } from "react";
import styles from "./modalRemove.module.css";
import { IoClose, IoArrowBackCircleOutline } from "react-icons/io5";
import { FiTrash } from "react-icons/fi";
import { Pet } from "@/types";

interface ModalRemoveProps {
  onClose: () => void;
  onRemoveItem: () => void;
  petData: Pet;
}

const ModalRemove: FC<ModalRemoveProps> = ({
  onClose,
  onRemoveItem,
  petData,
}) => {
  const [formData, setFormData] = useState<Pet>(petData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRadioChange = () => {
    // Não faz nada, apenas para impedir a alteração dos campos de rádio
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/pets/${petData.id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete pet");
      }
      onRemoveItem();
      onClose();
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  };

  return (
    <div className={styles.register_animal_container}>
      <div className={styles.register_animal}>
        <div className={styles.header_animal}>
          <div className={styles.div_circle}>
            <FiTrash />
          </div>
          <h1>Remover</h1>
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
                readOnly
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
                readOnly
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
                onChange={handleChange}
                placeholder="(00) 0 0000-0000"
                readOnly
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
                    readOnly
                  />
                  <label htmlFor="cachorro">Cachorro</label>
                </span>
                <span>
                  <input
                    type="radio"
                    id="gato"
                    name="animal"
                    value="Gato"
                    checked={formData.animal === "Gato"}
                    onChange={handleRadioChange}
                    readOnly
                  />
                  <label htmlFor="gato">Gato</label>
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
                readOnly
              />
            </div>
            <div>
              <label>
                <img className={styles.calendar} src="/calendar.svg" alt="" />
                Nascimento <span>(Aproximado)</span>
              </label>
              <input
                type="text"
                placeholder="22/08/2020"
                name="dataNascimento"
                value={formData.dataNascimento}
                onChange={handleChange}
                readOnly
              />
            </div>
          </div>

          <div className={styles.message}>
            <span>Tem certeza que deseja remover esse pet?</span>
          </div>

          <div className={styles.register_buttons}>
            <button onClick={onClose} className={styles.back_button}>
              <IoArrowBackCircleOutline size={28} />
              Voltar
            </button>
            <button type="submit" className={styles.button_register_modal}>
              <img src="/trash.svg" alt="" />
              Remover
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalRemove;
