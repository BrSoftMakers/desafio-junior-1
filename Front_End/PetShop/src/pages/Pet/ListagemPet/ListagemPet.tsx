import React, { useEffect, useState } from 'react';

import styles from './ListagemPet.module.css';

import { Pet, deletePet, getPet } from '../../../services/petService';
import { NavLink, useNavigate } from 'react-router-dom';

import Button from '../../../components/forms/Button/Button';


const ListagemPet: React.FC = () => {

    const navigate = useNavigate();

    const [pets, setPets] = useState<Pet[]>([]);

    const fetchPets = async () => {
        try {
            const pets = await getPet();
            setPets(pets);
        } catch (error) {
            console.log('Erro ao buscar Pets', error);
        }
    }

    useEffect(() => {
        fetchPets();
    }, []);

    const handleEdit = async (pet: Pet) => {
        navigate('/cadastro/pet', { state: pet })
    };

    const handleDelete = async (id: number) => {
        try {
            await deletePet(id);
            fetchPets();
            alert('Pet excluída com sucesso');
        } catch (error) {
            console.log('Erro ao excluir pet', error);
            alert('Ocorreu um erro ao excluir a pet')
        }
    };

    return (
        <main>
            <div className={styles.links}>
                <NavLink to="/listagem/pet" >
                    <div className={styles.div_link}>
                        Pet's
                    </div>
                </NavLink>
                <NavLink to="/listagem/cliente" >
                    <div className={styles.div_link}>
                        Clientes
                    </div>
                </NavLink>
            </div>
            <div className={styles.tabela}>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Tipo</th>
                            <th>Raça</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pets.map((itemPet, index) => (
                            <tr key={index}>
                                <td className={styles.Nome} >{itemPet.nome}</td>
                                <td>{itemPet.idade} meses </td>
                                <td>{itemPet.tipo}</td>
                                <td>{itemPet.raca}</td>
                                <td className={styles.actions}>
                                    <Button onClick={() => handleEdit(itemPet)} >Editar</Button>
                                    <Button onClick={() => handleDelete(itemPet.id)} red>Excluir</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default ListagemPet;