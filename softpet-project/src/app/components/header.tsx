'use client'
import styles from "../../styles/header.module.css";
import Logo from './icons/Logo';
import CadastrarPet from "./cadastrarPet";
import SearchIcon from './icons/SearchIcon.svg'

export default function Header({}) {
  
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
        <h3 className={styles.h3}>SoftPet</h3>
      </div>
      <div className={styles.Containersearch}>
        <div className={styles.search}>
          <span><SearchIcon/></span><input type="text" name="text" id="text" />
        </div>
          <CadastrarPet />
      </div>


    </header>
  );
}
