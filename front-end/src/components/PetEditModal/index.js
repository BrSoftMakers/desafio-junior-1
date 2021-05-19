import React, { useEffect, useState } from 'react';
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

const PetEditModal = ({ id, close, avatar }) => {
  const [name, setName] = useState();
  const [type, setType] = useState(avatar);
  const [age, setAge] = useState();
  const [breed, setBreed] = useState();
  const [ownerName, setOwnerName] = useState();
  const [ownerTel, setOwnerTel] = useState();
  const petAvatar = type === 'cachorro' ? '/dog.jpg' : '/cat.jpg';

  useEffect(() => {
    async function getData() {
      await api.get(`/pet/${id}`)
        .then(res => {
          const data = res.data;
          setName(data.name);
          setType(data.type);
          setAge(data.age);
          setBreed(data.breed);
          setOwnerName(data.ownerName);
          setOwnerTel(data.ownerTel);
        })
    }

    getData();
  }, [])

  async function editData(){
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
      await api.put(`/pet/${id}`, {
        name,
        type,
        age,
        breed,
        ownerName,
        ownerTel
      }).then(() => (
        alert(`As informações do(a) ${name} foram atualizadas! 😄`),
        close()
      )
      ).catch(() => (
        alert('Ops, tivemos um problema ao salvar as informações, tente mais tarde! 😢')
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
            value={name}
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
              checked={type === 'cachorro' && true}
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
              checked={type === 'gato' && true}
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
            value={age}
            onChange={e => setAge(e.target.value)}
          />
        </PetInput>

        <PetInput>
          <span>Raça</span>
          <input 
            type="text" 
            placeholder="Raça do animal"
            value={breed}
            onChange={e => setBreed(e.target.value)}
        />
        </PetInput>

        <PetInput>
          <span>Dono</span>
          <input 
            type="text" 
            placeholder="Nome do dono"
            value={ownerName}
            onChange={e => setOwnerName(e.target.value)}
          />
        </PetInput>

        <PetInput>
          <span>Tel</span>
          <input 
          type="tel" 
          placeholder="(12) 99999-9999"
          value={ownerTel}
          onChange={e => setOwnerTel(e.target.value)}
          />
        </PetInput>

        </PetInfoForm>

        <SaveBtn onClick={editData}>Salvar</SaveBtn>
      </Container>
    </Overlay>
    
  );
}

export default PetEditModal;
