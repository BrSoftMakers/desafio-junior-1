import Header from "../../components/Header";
import PetForm from "../../components/PetForm";

import styles from "./styles.module.css";

function NewPet() {
  return (
    <div className={styles.container}>
      <Header page="pets" />
      <h1>Cadastrar novo pet</h1>
      <PetForm method="create" />
    </div>
  );
}

export default NewPet;
