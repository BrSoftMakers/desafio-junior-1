import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import { usePet } from "../../contexts/PetContext";

import Header from "../../components/Header";
import PetsTable from "../../components/PetsTable";

import styles from "./styles.module.css";

function Dashboard() {
  const { pets, totalPets, page, updatePage } = usePet();

  const pages = Math.ceil(totalPets / 10);

  const arrayOfPages = [];

  for (let i = 1; i <= pages; i++) {
    arrayOfPages.push(i);
  }

  return (
    <div className={styles.container}>
      <Header page="pets" />
      <div className={styles.content}>
        <header className={styles.header}>
          Lista de pets cadastrados ({totalPets})
          <Link to="/pets/new" className={styles.newPetButton}>
            <FaPlus size={18} color="#fff" />
            Novo pet
          </Link>
        </header>
        <span className={styles.actualPage}>
          Página {page} - Exibindo {pets.length} de {totalPets}
        </span>
        <PetsTable />
        <div className={styles.pagination}>
          {arrayOfPages.map(pageNumber => (
            <button
              key={pageNumber}
              className={`${styles.paginationItem} ${
                pageNumber === page ? styles.active : ""
              }`}
              onClick={() => updatePage(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
