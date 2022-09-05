import React, { useRef, useState } from 'react'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  useDisclosure,
  useToast
} from '@chakra-ui/react'
import {
  useNavigate
} from "react-router-dom";

import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

import './styles.css'
import Alert from '../../../../components/Alert'
import Drawer from '../../../../components/Drawer'
import Form from '../Form'
import { deleteClient, updateClient } from '../../../../services/api';

export default function TableClients({ clients, listClients }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isOpenDrawer, onOpen: onOpenDrawer, onClose: onCloseDrawer } = useDisclosure()
  const cancelRef = useRef()
  const navigate = useNavigate()
  const toast = useToast()

  const [client, setClient] = useState()

  function renderActionButtons(client) {
    return (
      <div className='action-buttons'>
        <IconButton colorScheme='blue' aria-label='Editar cliente' icon={<EditIcon />} onClick={() => middlewareEdit(client)} />
        <IconButton colorScheme='red' aria-label='Deletar cliente' icon={<DeleteIcon />} onClick={() => middlewareDelete(client)} />
      </div>
    )
  }

  function middlewareEdit(client) {
    setClient(client)
    onOpenDrawer()
  }

  function middlewareDelete(client) {
    setClient(client)
    onOpen()
  }

  function handleConfirmDelete() {
    deleteClient(client.id)
      .finally(() => {
        listClients()
      })
      .catch(() => {
        toast({
          title: 'Erro ao deletar cliente.',
          description: "Verifique se o usuário ainda existe.",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      })
  }

  function handleUpdate(data) {
    updateClient(client.id, data)
      .finally(() => {
        listClients()
      })
      .catch(() => {
        toast({
          title: 'Erro ao atualizar cliente.',
          description: "Verifique se o usuário ainda existe.",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      })
  }

  return (
    <>
      <TableContainer className='table-container'>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th width={'2xl'}>Nome</Th>
              <Th>Telefone</Th>
              <Th align='center' justifyContent={'center'} alignItems={'center'}>Qnt. Pets</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody className='tr'>
            {
              clients.map(client => (
                <Tr key={client.id}>
                  <Td onClick={() => { navigate(`/clients/${client.id}/pets`) }}>{client.name}</Td>
                  <Td onClick={() => { navigate(`/clients/${client.id}/pets`) }}>{client.email}</Td>
                  <Td onClick={() => { navigate(`/clients/${client.id}/pets`) }}>{client.pets.length}</Td>
                  <Td>{renderActionButtons(client)}</Td>
                </Tr>
              ))
            }

          </Tbody>
        </Table>
      </TableContainer>

      <Alert
        title={'Deletar cliente'}
        confirmActionMessage={'Tem certeza que deseja deletar este cliente?'}
        confirmActionButtonText={'Deletar'}
        cancelActionButtonText={'Cancelar'}
        isOpen={isOpen}
        onClose={onClose}
        cancelRef={cancelRef}
        onConfirm={handleConfirmDelete}
      />

      <Drawer
        title={'Editar cliente'}
        isOpen={isOpenDrawer}
        onClose={onCloseDrawer}
        cancelText={'Cancelar'}
        confirmText={'Salvar'}
        children={<Form onClose={onCloseDrawer} initialValues={client} onSubmit={handleUpdate} />
        }
      />
    </>
  )
}
