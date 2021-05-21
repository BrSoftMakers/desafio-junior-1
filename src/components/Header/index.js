import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Header(){
    return (
        <header>

            <h2>MyPets</h2>
            
            <Link to="/">
                <strong>Inicio</strong>
            </Link>

            <Link to="/newPet">
                <strong>Novo Pet</strong>
            </Link>

        </header>
    )
}

export default Header;