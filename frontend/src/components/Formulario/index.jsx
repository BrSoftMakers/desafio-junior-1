import React, { useRef } from "react";
import "./Formulario.css";
import Botao from "../Botao";

const Formulario = () => {

  const ref = useRef();

  return (
    <section>
      <form red={ref}>
        <h2>Preencha os dados para cadastrar o tutor</h2>
        <div>
          <label>Nome</label>
          <input name="nomeTutor" placeholder="Digite o nome do tutor"></input>
        </div>
        <div>
          <label>Contato</label>
          <input name="contatoTutor" placeholder="Digite o contato do tutor"></input>
        </div>
        <div>
          <label>Endereço</label>
          <input name="enderecoTutor" placeholder="Digite o endereço do tutor"></input>
        </div>
        <Botao />
      </form>
    </section>
  )
}

export default Formulario;