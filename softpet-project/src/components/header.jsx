import styles from "../styles/header.module.css";
import Logo from './icons/Logo'


export default function Header() {
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
           <button>Cadastrar</button>
           </div>
         
        </div>


      </header>
  );
}
