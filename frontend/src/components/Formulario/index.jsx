import React, { useEffect, useRef, useState } from "react";
import "./Formulario.css";
import Botao from "../Botao";
import axios from "axios";
import { toast } from "react-toastify";

const Formulario = ({ getTutores, onEdit, setOnEdit, update }) => {
  const [tutor, setTutor] = useState({
    nome: '',
    contato: '',
    endereco: '',
    cpf: ''
  })
 
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      setTutor({
        nome: onEdit.nome,
        contato: onEdit.contato,
        endereco: onEdit.endereco,
        cpf: onEdit.cpf
      })
    }
  }, [onEdit])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !(tutor.nome && tutor.endereco && tutor.contato && tutor.cpf)
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          nome: tutor.nome,
          contato: tutor.contato,
          endereco: tutor.endereco,
          cpf: tutor.cpf,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/", {
          nome: tutor.nome,
          contato: tutor.contato,
          endereco: tutor.endereco,
          cpf: tutor.cpf,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    update()

    setOnEdit(null);
    setTutor({
      nome: '',
      contato: '',
      endereco: '',
      cpf: ''
    })
    getTutores();
  };

  return (
    <section>
      <form ref={ref} onSubmit={handleSubmit}>
        <h2>Preencha os dados para cadastrar o tutor</h2>
        <div>
          <label>Nome</label>
          <input onChange={(e) => setTutor({...tutor, nome: e.target.value})} name="nomeTutor" value={tutor.nome} placeholder="Digite o nome do tutor" type="text"></input>
        </div>
        <div>
          <label>Contato</label> 
          <input onChange={(e) => setTutor({...tutor, contato: e.target.value})} name="contatoTutor" value={tutor.contato} placeholder="Digite o contato do tutor"></input>
        </div>
        <div>
          <label>Endereço</label>
          <input  onChange={(e) => setTutor({...tutor, endereco: e.target.value})} name="enderecoTutor" value={tutor.endereco} placeholder="Digite o endereço do tutor"></input>
        </div>
        <div>
          <label>CPF</label>
          <input  onChange={(e) => setTutor({...tutor, cpf: e.target.value})} name="cpfTutor" value={tutor.cpf} placeholder="Digite o CPF do tutor"></input>
        </div>
        <Botao />
      </form>
    </section>
  )
}

export default Formulario;