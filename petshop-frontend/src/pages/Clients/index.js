import React, { useEffect, useState } from 'react'
import Drawer from '../../components/Drawer'
import Header from '../../components/Header'
import TableClients from './components/TableClients'

import {
    useDisclosure,
    useToast
} from '@chakra-ui/react'

import './styles.css'
import Form from './components/Form'
import { createClient, getClients } from '../../services/api'

export default function Clients() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()

    const [clients, setClients] = useState([])

    function listClients() {
        getClients()
            .then(response => setClients(response.data))
            .catch(() => toast({
                title: 'Erro ao listar clientes',
                status: 'error',
                duration: 5000,
                isClosable: true,
            }))
    }

    function newClient(data) {
        createClient(data).then(() => {
            listClients()
        }).catch(() => toast({
            title: 'Erro ao criar cliente',
            description: "Preencha os campos corretamente.",
            status: 'error',
            duration: 5000,
            isClosable: true,
        }))
    }

    useEffect(() => {
        listClients()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='client-container'>
            <Header title={'Clientes'} buttonTitle={'Novo'} onPress={onOpen} />

            <TableClients clients={clients} listClients={listClients} />

            <Drawer
                title={'Novo cliente'}
                isOpen={isOpen}
                onClose={onClose}
                cancelText={'Cancelar'}
                confirmText={'Salvar'}
                onConfirm={() => { alert('Novo cliente') }}
                children={
                    <Form onClose={onClose} onSubmit={newClient} />
                }
            />
        </div>
    )
}
