import { Link } from "react-router-dom";
import { FaTrash, FaPen } from "react-icons/fa";

import Checkbox from "../Checkbox";
import Tooltip from "../Tooltip";

import styles from "./styles.module.css";

const type = {
  cat: "Gato",
  dog: "Cachorro"
};

function PetTableItem({ pet, onSelect, onDelete, isActive }) {
  return (
    <tr
      className={isActive ? styles.active : ""}
      key={pet.id}
      onClick={onSelect}
    >
      <td>
        <Checkbox value={isActive} disableKeyboardSupport />
      </td>
      <td>{pet.name}</td>
      <td>
        {pet.age} ano{pet.age !== 1 && "s"}
      </td>
      <td>{type[pet.type]}</td>
      <td>{pet.breed}</td>
      <td>{pet.owner.name}</td>
      <td>{pet.owner.contact}</td>
      <td>
        <button
          className={`${styles.tableButton} ${
            isActive ? styles.visible : styles.invisible
          }`}
          data-tip={`Excluir ${pet.name}`}
          data-for="delete-tooltip"
          onClick={onDelete}
        >
          <FaTrash size={20} color="#F50057" />
        </button>
        <Tooltip id="delete-tooltip" />
      </td>
      <td>
        <Link
          to={`pets/update/${pet.id}`}
          className={styles.tableButton}
          data-tip={`Alterar ${pet.name}`}
          data-for="update-tooltip"
        >
          <FaPen size={20} color="#F50057" />
        </Link>
        <Tooltip id="update-tooltip" />
      </td>
    </tr>
  );
}

export default PetTableItem;
