import React, { useState } from 'react';
import api from '../../services/api';
import { 
  Overlay,
  Container,
  CloseIcon,
  PetImage,
  PetInfoForm,
  PetInput,
  SaveBtn
} from './style';
import { AiFillCloseCircle } from "react-icons/ai";

const PetRegisterModal = ({ close }) => {
  const [name, setName] = useState();
  const [type, setType] = useState('cachorro');
  const [age, setAge] = useState();
  const [breed, setBreed] = useState();
  const [ownerName, setOwnerName] = useState();
  const [ownerTel, setOwnerTel] = useState();
  const petAvatar = type === 'cachorro' ? '/dog.jpg' : '/cat.jpg';

  async function saveData(){
    if(!name){
      return alert('Nome é obrigatório!')
    }else if(!age){
      return alert('Idade é obrigatório!')
    }else if(!type){
      return alert('Tipo é obrigatório!')
    }else if(!breed){
      return alert('Raça é obrigatório!')
    }else if(!ownerName){
      return alert('Nome do dono é obrigatório!')
    }else if(!ownerTel){
      return alert('Telefone do dono é obrigatório!')
    }else{
      await api.post(`/pet`, {
        name,
        type,
        age,
        breed,
        ownerName,
        ownerTel
      }).then(() =>
        alert(`Pet, ${name} salvo com sucesso! 😄`),
        close()
  
      ).catch(err => (
        alert('Ops, tivemos um problema ao salvar as informações, tente mais tarde! 😢'),
        close()
      ))
    }
    
  }


  return (
    <Overlay>
      <Container>
        <CloseIcon onClick={close}>
          <AiFillCloseCircle />
        </CloseIcon>
        <PetImage src={petAvatar} alt="pet-avatar" />

        <PetInfoForm>

        <PetInput>
          <span>Nome</span>
          <input 
            type="text" 
            placeholder="Nome do animal"
            onChange={e => setName(e.target.value)}
          />
        </PetInput>

        <PetInput>
          <span>Animal</span>

          <div>
            <input 
              type="radio" 
              id="dog" 
              name="type"
              value="cachorro"
              onChange={ e => setType(e.target.value)}
            />
            <label htmlFor="dog">Cachorro</label>
          </div>

          <div>
            <input 
              type="radio" 
              id="cat" 
              name="type"
              value="gato"
              onChange={ e => setType(e.target.value)}
            />
            <label htmlFor="cat">Gato</label>
          </div>
        </PetInput>

        <PetInput>
          <span>Idade</span>
          <input 
            type="number" 
            min="1" 
            placeholder="Idade do animal (anos)"
            onChange={e => setAge(e.target.value)}
          />
        </PetInput>

        <PetInput>
          <span>Raça</span>
          <input 
            type="text" 
            placeholder="Raça do animal"
            onChange={e => setBreed(e.target.value)}
        />
        </PetInput>

        <PetInput>
          <span>Dono</span>
          <input 
            type="text" 
            placeholder="Nome do dono"
            onChange={e => setOwnerName(e.target.value)}
          />
        </PetInput>

        <PetInput>
          <span>Tel</span>
          <input 
          type="tel" 
          placeholder="(12) 99999-9999"
          onChange={e => setOwnerTel(e.target.value)}
          />
        </PetInput>

        </PetInfoForm>

        <SaveBtn onClick={saveData}>Salvar</SaveBtn>
      </Container>
    </Overlay>
    
  );
}

export default PetRegisterModal;
