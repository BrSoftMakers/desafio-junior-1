import React from 'react'

import HeaderMain from '../../components/HeaderMain'
import './feed.scss'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'

function Feed() {
    
    const [ posts, setPosts ] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("http://localhost:3001/pets/")
        .then((response) => {
            setPosts(response.data)
            setLoading(false)
        }).catch(() => {
            console.log('Deu errado')
        })
    },[posts])

    
    function deletePet(id) {
        axios.delete(`http://localhost:3001/pets/deletar/${id}`)
        .then(() => {
            alert('Pet deletado com sucesso')
        }).catch(() => {
            alert('Falha ao deletar o Pet')
        })
    }

    
    return (
        <div>
            <HeaderMain></HeaderMain>
            
            <main>
                <h1>Todos os Pets</h1>
                <div className='content-cards'>
                    
                { loading ? 
                    (<h3>Carregando...</h3>) :
                        
                    posts.map((post, key) => {
                        return (
                            <div className='box-card' key={key}>
                                <header>
                                    <h2>{post.nome}</h2>
                                   
                                    <div className='buttons'>
                                        <Link to={{ pathname:`/edit/${post.id}` }}>
                                            <button className='btn-edit'>Editar</button>
                                        </Link>
                                        <Link to={{ pathname:`/about/${post.id}` }}>
                                            <button className='btn-about'>Saiba mais</button>
                                        </Link>
                                        <button className='btn-delete' onClick={() => deletePet(post.id)}>Deletar</button>
                                    </div>
                                </header>

                            <div className='line'></div>

                            <ul>
                                <li>Idade: {post.idade} anos</li>
                                    <li>Espécie: {post.especie}</li>
                                    <li>Raça: {post.raca}</li>
                                    <li>Nome do Dono: {post.nome_dono}</li>
                                    <li>Número do Dono: {post.numero_dono}</li>
                            </ul>
                </div>
                            )
                    })
                }
                        
                </div>
            </main>
        </div>    
    )
}

export default Feed;