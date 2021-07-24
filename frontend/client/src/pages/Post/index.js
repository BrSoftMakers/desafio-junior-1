import React from 'react'
import Header from '../../components/Header'
import {useForm} from 'react-hook-form'
import './post.scss'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

// formState: {errors}}
function Post() {
    
    const history = useHistory()
    const { register, handleSubmit } = useForm()

    const addPet = (values) => {
        axios.post("http://localhost:3001/pets/adicionar", values)
        .then(() => {
            alert('Pet cadastrado com sucesso')
            history.push('/')
        }).catch(() => {
            alert('Falha ao cadastrar Pet')
        })


    }
    
    return (
        <div>
            <Header></Header>

            <main>
                <div className='card-post-post'>
                    <h1>Cadastrar Pet</h1>
                    
                    <div className='line-post'></div>

                    <div className='card-body-post'>
                        
                        <form onSubmit={handleSubmit(addPet)}>
                            <div className='fields'>
                                <label>Nome do Pet</label>
                                <input type='text' placeholder='Ex: Bob' name='nome' {...register('nome')}/>
                                
                            </div>

                            <div className='fields'>
                                <label>Idade do Pet</label>
                                <input type='number' placeholder='Ex: 2' name='idade' {...register('idade')}/>
                                
                            </div>

                            <div className='fields'>
                                <label>Raça do Pet</label>
                                <input type='text' placeholder='Ex: Poodle' name='raca' {...register('raca')}/>
                                
                            </div>

                            <div className='fields'>
                                <label>Espécie do Pet</label>
                                <input type='text' placeholder='Ex: Pequeno/Médio/Grande' name='especie' {...register('especie')}/>
                                
                            </div>

                            <div className='fields'>
                                <label>Nome do Dono</label>
                                <input type='text' placeholder='Ex: Pedro Paulo' name='nome_dono' {...register('nome_dono')}/>
                                
                            </div>

                            <div className='fields'>
                                <label>Número do Dono</label>
                                <input type='tel' placeholder='Ex: (71)999440797' name='numero_dono' {...register('numero_dono')}/>
                                
                            </div>

                            <div className='fields'>
                                <label>Escreva um pouco sobre o Pet</label>
                                <textarea type='text' placeholder='Ex: Lindo e cheiroso' name='conteudo' {...register('conteudo')}></textarea>
                              
                            </div>

                            <div className='btn-post'>
                                <button type='submit'>Enviar</button>
                            </div>



                        </form>
                    </div>

                </div>
            </main>
        </div>    
    )
}

export default Post;