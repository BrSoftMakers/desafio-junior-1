import React from 'react'
import logoPet from '../../assets/petlogo.png'
import {Link} from 'react-router-dom'
import './styles.scss'

function HeaderMain() {
    return (
        <header className='header-main'>
            <div className='content'>
                <div className='logo'>
                    <img src={logoPet} alt='logo'></img>
                </div>

                <div className='btn-newPost'>
                    <Link to='/post'>
                        <button>Adicionar Pet</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default HeaderMain;