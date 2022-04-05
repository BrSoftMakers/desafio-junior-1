import React from "react";
import Form from "../Form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Edit = () => {

  /*Recebe o paramentro do id pela URL*/
  const { id } = useParams();
  const [petshopData, setPetshopData] = useState([]);
  const [editValues, setEditValues] = useState([]);

  const navigate = useNavigate;

  /*Faz uma requisição ao BD com base no id*/
  useEffect(() => {
    axios.get(`http://localhost:3001/editar/${id}`).then((response) => {
      /*Atualiza o estado das variaveis*/
      setPetshopData(response.data);
      setEditValues(response.data);
    });
  }, []);

  /*Seta os novos valores para enviar ao bando de dados*/
  const handleChangeValues = (value) => {
    console.log( value.target.name, value.target.value )
    setEditValues(prevValues => ([{
      ...prevValues[0],
      [value.target.name]: value.target.value,
    }]));
    setPetshopData(prevValues => ([{
      ...prevValues[0],
      [value.target.name]: value.target.value,
    }]));
  };
  /*Faz o envio do novo dado para o BD*/
  const onClicked = (acao, caminho) => {
    /*Botão enviar é assionado*/
    if (acao == "enviar") {
      /*Atualiza os dados com base no que esta armazenado na varivel "editValues"*/
      axios.put(`http://localhost:3001/editado`, {
        id: editValues[0].id,
        nome_pet: editValues[0].nome_pet,
        raca_pet: editValues[0].raca_pet,
        idade_pet: editValues[0].idade_pet,
        tipo_pet: editValues[0].tipo_pet,
        nome_dono: editValues[0].nome_dono,
        telefone_dono: editValues[0].telefone_dono,
        endereco_dono: editValues[0].endereco_dono
      }).then((response) => {
        console.log(response);
        /* Navega para a pagina inicial */
        navigate(`/${caminho}`);
      });
      /* Botão cancelar é assiondo */
    } else {
      /* Navega para a pagina inicial */
      navigate(`/`);
    }
  }

  return (

    <div className="container">
      <h3>Editar Visita</h3>
      {/*Map para printar na tela dodos os regitros do banco de dados*/}
      {petshopData?.map((pet, i) =>
        /*Passando informações via props*/
        <Form
          key={i}
          nomePet={pet.nome_pet}
          racaPet={pet.raca_pet}
          idadePet={pet.idade_pet}
          nomeDono={pet.nome_dono}
          telefoneDono={pet.telefone_dono}
          endDono={pet.endereco_dono}

          handleChangeValues={handleChangeValues}
          onClicked={onClicked} />
      )}
    </div>
  );
}
export default Edit