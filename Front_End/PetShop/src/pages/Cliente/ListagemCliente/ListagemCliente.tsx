import React, { useEffect, useState } from 'react';

import styles from './ListagemCliente.module.css';

import { Cliente, deleteCliente, getCliente } from '../../../services/clienteService';
import { NavLink, useNavigate } from 'react-router-dom';

import Button from '../../../components/forms/Button/Button';

const ListagemPet: React.FC = () => {

    const navigate = useNavigate();

    const [clientes, setClientes] = useState<Cliente[]>([]);

    const fetchClientes = async () => {
        try {
            const clientes = await getCliente();
            setClientes(clientes);
        } catch (error) {
            console.log('Erro ao buscar Cliente', error);
        }
    }

    useEffect(() => {
        fetchClientes();
    }, []);

    const handleEdit = async (cliente: Cliente) => {
        navigate('/cadastro/cliente', { state: cliente })
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteCliente(id);
            fetchClientes();
            alert('Pet excluída com sucesso');
        } catch (error) {
            console.log('Erro ao excluir cliente', error);
            alert('Ocorreu um erro ao excluir a cliente')
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
                            <th>Número de Contato</th>
                            <th>Endereço</th>
                            <th>Pet</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((itemCliente, index) => (
                            <tr key={index}>
                                <td>{itemCliente.nome}</td>
                                <td>{itemCliente.numero_contato}</td>
                                <td>{itemCliente.endereco}</td>
                                <td>{itemCliente.nome_pet}</td>
                                <td className={styles.actions}>
                                    <Button onClick={() => handleEdit(itemCliente)} >Editar</Button>
                                    <Button onClick={() => handleDelete(itemCliente.id)} red>Excluir</Button>
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