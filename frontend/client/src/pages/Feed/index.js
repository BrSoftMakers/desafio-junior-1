import React from 'react'
import HeaderMain from '../../components/HeaderMain'
import './styles.scss'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'

function Feed() {
    
    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/pets/")
        .then((response) => {
            setPosts(response.data)
            console.log(response.data)
        }).catch(() => {
            console.log('Deu errado')
        })
    },[])
    
    return (
        <div>
            <HeaderMain></HeaderMain>

            <main>
                <h1>Todos os Pets</h1>
                <div className='content-cards'>
                    
                        {posts.map((post, key) => {
                            return (
                                <div className='box-card' key={key}>
                                    <header>
                                        <h2>{post.nome}</h2>
                                       
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
                                        <li>Idade: {post.idade}</li>
                                        <li>Espécie: {post.especie}</li>
                                        <li>Raça: {post.raca}</li>
                                        <li>Nome do Dono: {post.nome_dono}</li>
                                        <li>Número do Dono: {post.numero_dono}</li>
                                    </ul>
                                </div>
                            )
                        })}
                        
                </div>
            </main>
        </div>    
    )
}

export default Feed;