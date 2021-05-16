import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

import { usePet } from "../../contexts/PetContext";

import Checkbox from "../Checkbox";
import Tooltip from "../Tooltip";
import PetTableItem from "./PetTableItem";

import styles from "./styles.module.css";

function PetsTable() {
  const { page, pets, deletePet, deleteManyPets } = usePet();
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  function handleSelectAllChange() {
    if (selectAll) {
      setSelectAll(false);
      setSelectedItems([]);
    } else {
      setSelectAll(true);
      setSelectedItems(pets.map(pet => pet.id));
    }
  }

  function handleToggleItemChange(id) {
    if (selectedItems.includes(id)) {
      setSelectedItems(previousValue =>
        previousValue.filter(item => item !== id)
      );
    } else {
      setSelectedItems(previousValue => [...previousValue, id]);
    }
  }

  function handleDeletePets() {
    deleteManyPets(selectedItems);

    setSelectedItems([]);
  }

  useEffect(() => {
    setSelectedItems([]);
    setSelectAll(false);
  }, [page]);

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <Checkbox
                value={selectAll}
                onChange={handleSelectAllChange}
                className={styles.tableHeadCheckbox}
              />
            </th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Tipo</th>
            <th>Espécie</th>
            <th>Nome do dono</th>
            <th>Telefone do dono</th>
            <th>
              <button
                className={`${styles.tableButton} ${
                  selectedItems.length > 0 ? styles.visible : styles.invisible
                }`}
                data-tip="Excluir todos os selecionados"
                data-for="delete-all-tooltip"
                onClick={handleDeletePets}
              >
                <FaTrash size={20} color="#F50057" />
              </button>
              <Tooltip id="delete-all-tooltip" />
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {pets.map(pet => (
            <PetTableItem
              key={pet.id}
              pet={pet}
              onSelect={() => handleToggleItemChange(pet.id)}
              onDelete={() => deletePet(pet.id)}
              isActive={selectedItems.includes(pet.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PetsTable;
