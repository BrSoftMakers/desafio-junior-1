import { Link } from "react-router-dom";
import { MdPets } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";

import Tooltip from "../Tooltip";

import logoImg from "../../assets/goPets.png";

import styles from "./styles.module.css";

function Header({ page = "pets" }) {
  return (
    <header className={styles.container}>
      <img src={logoImg} alt="goPets" />
      <nav className={styles.nav}>
        <Link
          to="/dashboard"
          className={`${styles.navItem} ${
            page === "pets" ? styles.active : ""
          }`}
        >
          <MdPets size={24} color="#fff" />
          Pets
        </Link>
        <Link
          to="#"
          className={`${styles.navItem} ${styles.inactive}`}
          data-tip="Em breve.."
        >
          <FaUser size={24} color="#fff" />
          Usuários
        </Link>
        <Tooltip />
      </nav>
      <Link to="/" className={styles.logout}>
        Sair
        <RiLogoutBoxRLine size={24} color="#fff" />
      </Link>
    </header>
  );
}

export default Header;
