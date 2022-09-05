import React, { useState, useRef } from 'react'

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
  useNavigate,
  useParams
} from "react-router-dom";

import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

import './styles.css'
import Alert from '../../../../components/Alert'
import Drawer from '../../../../components/Drawer'
import FormPets from '../FormPets';
import { deletePet, updatePet } from '../../../../services/api';
import { formatDateToPetTable, getPetAge, getPetMonthAge } from '../../../../utils/date.util';

export default function TablePets({ pets, listPets }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isOpenDrawer, onOpen: onOpenDrawer, onClose: onCloseDrawer } = useDisclosure()
  const cancelRef = useRef()
  const navigate = useNavigate();
  const toast = useToast()

  const { id } = useParams();

  const clientId = id

  const [pet, setPet] = useState()


  function renderActionButtons(pet) {
    return (
      <div className='action-buttons'>
        <IconButton colorScheme='blue' aria-label='Editar pet' icon={<EditIcon />} onClick={() => middlewareEdit(pet)} />
        <IconButton colorScheme='red' aria-label='Deletar pet' icon={<DeleteIcon />} onClick={() => middlewareDelete(pet)} />
      </div>
    )
  }

  function middlewareEdit(pet) {
    setPet(pet)
    onOpenDrawer()
  }

  function middlewareDelete(pet) {
    setPet(pet)
    onOpen()
  }

  function handleConfirmDelete() {
    deletePet(pet.id)
      .finally(() => {
        listPets()
      })
      .catch(() => {
        toast({
          title: 'Erro ao deletar pete.',
          description: "Verifique se o usuário ainda existe.",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      })
  }


  function handleUpdate(data) {
    updatePet(pet.id, data)
      .finally(() => {
        listPets()
      })
      .catch(() => {
        toast({
          title: 'Erro ao atualizar pet.',
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
              <Th>Idade</Th>
              <Th align='center' justifyContent={'center'} alignItems={'center'}>Tipo</Th>
              <Th>Raça</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody className='tr'>
            {
              pets.map((pet) => (
                <Tr key={pet.id}>
                  <Td>{pet.nickname}</Td>
                  <Td>{getPetMonthAge(pet.birthday)} meses</Td>
                  <Td>{pet.type}</Td>
                  <Td>{pet.breed}</Td>
                  <Td>{renderActionButtons(pet)}</Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>

      <Alert
        title={'Deletar Pet'}
        confirmActionMessage={'Tem certeza que deseja deletar este pet ?'}
        confirmActionButtonText={'Deletar'}
        cancelActionButtonText={'Cancelar'}
        isOpen={isOpen}
        onClose={onClose}
        cancelRef={cancelRef}
        onConfirm={handleConfirmDelete}
      />

      <Drawer
        title={'Editar dados do Pet'}
        isOpen={isOpenDrawer}
        onClose={onCloseDrawer}
        cancelText={'Cancelar'}
        confirmText={'Salvar'}
        children={<FormPets onClose={onCloseDrawer} onSubmit={handleUpdate} initialValues={pet} clientId={clientId} />
        }
      />
    </>
  )
}
