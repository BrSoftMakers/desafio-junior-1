import { useState } from "react";
import styles from "./searchForm.module.css";
import { FiSearch, FiPlusCircle } from "react-icons/fi";
import Modal from "../ModalRegister/modal";
import { Pet } from "@/types";


interface SearchFormProps {
  handleOpenModal: () => void;
  onAddPet: (newPet: Pet) => void;
  onSearch: (searchTerm: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onAddPet, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.form}>
      <FiSearch className={styles.icon} />

      <div className={styles.input_container}>
        <input type="text" value={searchTerm} onChange={handleChange} />
        <button onClick={handleSearch}>Pesquisar</button>
      </div>

      <button onClick={handleOpenModal} className={styles.button_register}>
        <FiPlusCircle className={styles.icon_plus} size={23} />
        Cadastrar
      </button>

      {modalOpen && (
        <Modal onAddPet={onAddPet} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default SearchForm;
