import React, { useEffect, useRef, useState } from "react";
import "./FormularioPet.css";
import Botao from "../Botao";
import axios from "axios";
import { toast } from "react-toastify";

const FormularioPet = ({ getPets, onEdit, setOnEdit, update }) => {
  const [pet, setPet] = useState({
    nomePet: '',
    tipo: '',
    raca: '',
    idade: '',
    cpfTutor: ''
  })
 
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      setPet({
        nomePet: onEdit.nomePet,
        tipo: onEdit.tipo,
        raca: onEdit.raca,
        idade: onEdit.idade,
        cpfTutor: onEdit.cpfTutor
      })
    }
  }, [onEdit])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !(pet.nomePet && pet.tipo && pet.raca && pet.idade && pet.cpfTutor)
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/pet" + onEdit.id, {
          nomePet: pet.nomePet,
          tipo: pet.tipo,
          raca: pet.raca,
          idade: pet.idade,
          cpfTutor: pet.cpfTutor
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/pet", {
          nomePet: pet.nomePet,
          tipo: pet.tipo,
          raca: pet.raca,
          idade: pet.idade,
          cpfTutor: pet.cpfTutor
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    update()

    setOnEdit(null);
    setPet({
      nomePet: '',
      tipo: '',
      raca: '',
      idade: '',
      cpfTutor: ''
    })
    getPets();
  };

  return (
    <section>
      <form ref={ref} onSubmit={handleSubmit}>
        <h2>Preencha os dados para cadastrar o seu pet</h2>
        <div>
          <label>Nome</label>
          <input onChange={(e) => setPet({...pet, nomePet: e.target.value})} name="nomepet" value={pet.nomePet} placeholder="Digite o nome do pet" type="text"></input>
        </div>
        <div>
          <label>Tipo</label>
          <select onChange={(e) => setPet({...pet, tipo: e.target.value})} name="tipo" value={pet.tipo}>
            <option value="" disabled>Selecione o tipo</option>
            <option>Cachorro</option>
            <option>Gato</option>
          </select>
        </div>
        <div>
          <label>Raça</label>
          <input  onChange={(e) => setPet({...pet, raca: e.target.value})} name="raca" value={pet.raca} placeholder="Digite a raça do seu pet"></input>
        </div>
        <div>
          <label>Idade</label>
          <input  onChange={(e) => setPet({...pet, idade: e.target.value})} name="idade" value={pet.idade} placeholder="Ex.: 2 anos e 7 meses"></input>
        </div>
        <div>
          <label>CPF do tutor</label>
          <input  onChange={(e) => setPet({...pet, cpfTutor: e.target.value})} name="cpfTutor" value={pet.cpfTutor} pattern="\d{3}\d{3}\d{3}\d{2}"  placeholder="Digite apenas números"></input>
        </div>
        <Botao />
      </form>
    </section>
  )
}

export default FormularioPet;