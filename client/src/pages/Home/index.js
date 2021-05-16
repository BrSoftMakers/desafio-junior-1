import { Link } from "react-router-dom";

import Tooltip from "../../components/Tooltip";

import logoImg from "../../assets/goPets.png";
import shopImg from "../../assets/shop.svg";
import dashboardImg from "../../assets/dashboard.svg";

import styles from "./styles.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <img src={logoImg} alt="goPets" />
      <span className={styles.description}>Seu petshop online</span>
      <div className={styles.content}>
        <Link to="/" className={styles.linkContent} data-tip="Em breve...">
          <img src={shopImg} alt="Loja" />
          <span>Loja</span>
        </Link>
        <Tooltip />
        <Link to="/dashboard" className={styles.linkContent}>
          <img src={dashboardImg} alt="Dashboard" />
          <span>Dashboard</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
