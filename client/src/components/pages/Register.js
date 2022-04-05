import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Form from "../Form"

const Register = () => {

  const navigate = useNavigate();
  const [values, setValues] = useState();
  /*Função que manda o novo registro para o banco de dados*/
  const onClicked = (acao) => {
    /*Botão Enviar é acionado*/
    if (acao == "enviar") {
      /*Requisição que envia o registro*/
      axios.post("http://localhost:3001/sucesso", {
        nome_pet: values.nome_pet,
        raca_pet: values.raca_pet,
        idade_pet: values.idade_pet,
        tipo_pet: values.tipo_pet,
        nome_dono: values.nome_dono,
        telefone_dono: values.telefone_dono,
        endereco_dono: values.endereco_dono,
      }).then((response) => {
        console.log(response);
      });
      navigate(`/`);
      /*Botão Cancelar é acionado*/
    } else {
      /*Navega para a tela inicial*/
      navigate(`/`);
    }
  }

  /*Atualiza o estado da variavel e monta o objeto*/
  const handleChangeValues = (value) => {
    setValues(prevValues => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  }

  return (
    <div className="container">
      <h3 className="mt-3 ">MARCAR NOVA CONSULTA</h3>
      <Form
        handleChangeValues={handleChangeValues}
        onClicked={onClicked} />
    </div>
  );
}
export default Register