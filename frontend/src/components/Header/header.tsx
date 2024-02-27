import styles from "./header.module.css";

const Header = () => {
  return (
    <header>
      <header className={styles.header}>
        <img src="/logo.svg" alt="nao funfou" />
        <h1>SoftPet</h1>
      </header>
    </header>
  );
};

export default Header;
