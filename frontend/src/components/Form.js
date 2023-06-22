import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getPets, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
          const pet = ref.current;
    
          pet.nome.value = onEdit.nome;
          pet.idade.value = onEdit.idade;
          pet.tipo.value = onEdit.tipo;
          pet.raca.value = onEdit.raca;
          pet.contato.value = onEdit.contato;
          pet.endereco.value = onEdit.endereco;
        }
      }, [onEdit]);

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const pet = ref.current;
    
        if (
          !pet.nome.value ||
          !pet.idade.value ||
          !pet.tipo.value ||
          !pet.raca.value ||
          !pet.contato.value ||
          !pet.endereco.value
        ) {
          return toast.warn("Preencha todos os campos!");
        }
    
        if (onEdit) {
          await axios
            .put("http://localhost:3001/pets/2", {
              nome: pet.nome.value,
              idade: pet.idade.value,
              tipo: pet.tipo.value,
              raca: pet.raca.value,
              contato: pet.contato.value,
              endereco: pet.endereco.value,
            })
            .then(() => toast.success('Deu bao'))
            .catch(() => toast.error('Deu ruim'));
        } else {
          await axios
            .post("http://localhost:3001/pets/", {
              nome: pet.nome.value,
              idade: pet.idade.value,
              tipo: pet.tipo.value,
              raca: pet.raca.value,
              contato: pet.contato.value,
              endereco: pet.endereco.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        }
    
        pet.nome.value = "";
        pet.idade.value = "";
        pet.tipo.value = "";
        pet.raca.value = "";
        pet.contato.value = "";
        pet.endereco.value = "";
    
        setOnEdit(null);
        getPets();
      };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome"/>
            </InputArea>
            <InputArea>
                <Label>idade</Label>
                <Input name="idade"/>
            </InputArea>
            <InputArea>
                <Label>tipo</Label>
                <Input name="tipo"/>
            </InputArea>
            <InputArea>
                <Label>raca</Label>
                <Input name="raca"/>
            </InputArea>
            <InputArea>
                <Label>contato</Label>
                <Input name="contato"/>
            </InputArea>
            <InputArea>
                <Label>endereco</Label>
                <Input name="endereco"/>
            </InputArea>

            <Button type="submit">SALVAR</Button>
        </FormContainer>
    );
};

export default Form;