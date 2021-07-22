import React from 'react'
import HeaderMain from '../../components/HeaderMain'
import './styles.scss'
import {Link} from 'react-router-dom'

function Feed() {
    return (
        <div>
            <HeaderMain></HeaderMain>

            <main>
                <h1>Todos os Pets</h1>
                <div className='content-cards'>
                    <div className='box-card'>
                        <header>
                            <h2>Maxx</h2>
                            <div className='buttons'>
                                <Link to='/edit'>
                                    <button className='btn-edit'>Editar</button>
                                </Link>
                                <Link to='/about'>
                                    <button className='btn-about'>Saiba mais</button>
                                </Link>
                                
                            </div>
                        </header>

                        <div className='line'></div>

                        <ul>
                            <li>Idade:</li>
                            <li>Espécie:</li>
                            <li>Raça:</li>
                            <li>Nome do Dono:</li>
                            <li>Número do Dono:</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>    
    )
}

export default Feed;