
import React, { useState, useEffect } from "react";
import Drawer from "../../components/Drawer";
import Header from "../../components/Header";

import {
  useDisclosure,
  IconButton,
  useToast,
} from '@chakra-ui/react'
import {
  useNavigate,
  useParams
} from "react-router-dom";
import './styles.css'
import FormPets from "./components/FormPets";
import TablePets from "./components/TablePets";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { createPet, getPets } from "../../services/api";


export default function Pets() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { id } = useParams();

  const clientId = id


  const toast = useToast()

  const [pets, setPets] = useState([])

  function listPets() {
    getPets(clientId)
      .then(response => setPets(response.data))
      .catch(() => toast({
        title: 'Erro ao listar pets',
        status: 'error',
        duration: 5000,
        isClosable: true,
      }))
  }

  function newPet(data) {
    createPet(data).then(() => {
      listPets()
    })
      .catch(() =>
        toast({
          title: 'Erro ao criar pet',
          description: "Preencha os campos corretamente.",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      )
  }

  useEffect(() => {
    listPets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="pet-container">
      <Header title={"Pets"} buttonTitle={"Novo Pet"} onPress={onOpen} />

      <div className="backArrow"><IconButton

        variant={'outline'}
        aria-label='Voltar'
        icon={<ArrowBackIcon />}
        onClick={() => { navigate("/") }} />
      </div>


      <TablePets pets={pets} listPets={listPets} />
      <Drawer
        title={"Novo Pet"}
        isOpen={isOpen}
        onClose={onClose}
        cancelText={"Cancelar"}
        confirmText={"Salvar"}
        children={<FormPets onClose={onClose} onSubmit={newPet} clientId={clientId} />}
      />
    </div>
  );
}
