import React from 'react'
import {Link} from 'react-router-dom'
import './styles.scss'
import buttonBack from '../../assets/buttonback.svg'

function Header() {
    return (
        <header className='header'>
            <div className='content'>
                <Link to='/'>
                    <img src={buttonBack} alt='botao voltar' style={{width: '50px'}}></img>
                </Link>
            </div>
        </header>
    )
}

export default Header;