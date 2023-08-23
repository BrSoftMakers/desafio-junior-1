import React from "react";

import styles from './Header.module.css';
import logo from '../../../image/logo.png';
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div>
                <NavLink to='/' className={styles.logo}>
                    <img src={logo} alt="petshop" />
                    PetShop
                </NavLink>
            </div>
            <nav>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <NavLink to="/cadastro/pet" >
                            Cadastrar Pet
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/listagem/pet" >
                            Listagem de Pet
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header >
    )
}

export default Header;