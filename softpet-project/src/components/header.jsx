import styles from "../styles/header.module.css";
import Logo from './icons/Logo';
import CadastrarPet from "./cadastrarPet";

export default function Header({ buttonState, toggleButtonState }) {
  return (


    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
        <h3 className={styles.h3}>SoftPet</h3>
      </div>
      <div className={styles.Containersearch}>
        <div className={styles.search}>
          <input type="text" name="text" id="text" />
        </div>
        <div>
          <button onClick={toggleButtonState}>Cadastrar</button>
          {buttonState ? <CadastrarPet toggleButtonState={toggleButtonState} /> : '' }
        </div>

      </div>


    </header>
  );
}
