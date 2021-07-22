import React from 'react'
import Header from '../../components/Header'
import {useForm} from 'react-hook-form'
import './styles.scss'

function Post() {
    
    const { register, handleSubmit, formState: {erros}} = useForm()

    const addPet = (values) => {
        console.log(values)
    }
    
    return (
        <div>
            <Header></Header>

            <main>
                <div className='card-post'>
                    <h1>Cadastrar Pet</h1>
                    
                    <div className='line-post'></div>

                    <div className='card-body-post'>
                        
                        <form onSubmit={handleSubmit(addPet)}>
                            <div className='fields'>
                                <label>Nome do Pet</label>
                                <input type='text' name='nome' {...register('nome')}/>
                            </div>

                            <div className='fields'>
                                <label>Idade do Pet</label>
                                <input type='number' name='idade' {...register('idade')}/>
                            </div>

                            <div className='fields'>
                                <label>Raça do Pet</label>
                                <input type='text' name='raca' {...register('raca')}/>
                            </div>

                            <div className='fields'>
                                <label>Espécie do Pet</label>
                                <input type='text' name='especie' {...register('especie')}/>
                            </div>

                            <div className='fields'>
                                <label>Nome do Dono</label>
                                <input type='text' name='donoNome' {...register('donoNome')}/>
                            </div>

                            <div className='fields'>
                                <label>Número do Dono</label>
                                <input type='tel' name='donoNumero' {...register('donoNumero')}/>
                            </div>

                            <div className='fields'>
                                <label>Escreva um pouco sobre o Pet</label>
                                <textarea type='text' name='conteudo' {...register('conteudo')}></textarea>
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