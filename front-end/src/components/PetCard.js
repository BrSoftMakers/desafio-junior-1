import React, { useEffect, useState } from 'react';
import api from '../services/api';
import styled from 'styled-components';
import PetEditModal from './PetEditModal';
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const PetCard = ({ data }) => {
  const [petsData, setpetsData] = useState([]);
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [age, setAge] = useState();
  const [breed, setBreed] = useState();
  const [ownerName, setOwnerName] = useState();
  const [ownerTel, setOwnerTel] = useState();
  const [showEdit, setShowEdit] = useState(false);
  const petAvatar = type === 'cachorro' ? '/dog.jpg' : '/cat.jpg';

  useEffect(() => {
    async function getData() {
      await api.get(`/pet/${data._id}`)
        .then(res => {
          setpetsData(res.data)
          setName(petsData.name);
          setType(petsData.type);
          setAge(petsData.age);
          setBreed(petsData.breed);
          setOwnerName(petsData.ownerName);
          setOwnerTel(petsData.ownerTel);
        })
    }

    getData();
  }, [petsData]);

  async function deleteData(){
    const confirmation = window.confirm('Você deseja mesmo excluir ?');
    
    if(confirmation){
      await api.delete(`/pet/${data._id}`)
        .then(() => {
          alert('Pet excluido!');
          window.location.reload();
        }).catch(() => {
          alert('Ops. houve um problema ao exluir, tente mais tarde!');
        })
    }
  }

  function showEditModal() {
    setShowEdit(!showEdit);
  }

  return (
    <>
      { showEdit && <PetEditModal id={data._id} close={showEditModal} avatar={petAvatar} /> }
      <PetCardContainer>
        <Icons className="iconsArea">
          <EditIcon className="edit" onClick={showEditModal}>
            <FaEdit />
          </EditIcon>
          <DeleteIcon className="delete" onClick={deleteData}>
            <FaTrashAlt />
          </DeleteIcon>
        </Icons>
        <ImageArea url={petAvatar} />

        <PetInfo>
          <Name>{name}</Name>
          <Breed>{breed}</Breed>
          <Age>{age + (age === 1 ? ' ano' : ' anos')}</Age>
          <OwnerName>Dono: {ownerName}</OwnerName>
          <OwnerTel>Tel: {ownerTel}</OwnerTel>
        </PetInfo>
      </PetCardContainer>
    </>
  );
}

const PetCardContainer = styled.div`
  width: 200px;
  height: 300px;
  background: ${props => props.theme.brown};
  border-radius: 30px;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  transform: scale(0.9);
  transition: all ease 0.2s;

  :hover{
    transform: scale(1);

    .iconsArea{
      font-size: 20px;
      .edit, .delete{
        transform: rotate(360deg);
      }
    }
  }
`;

const Icons = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0px;
  transition: all ease 0.2s;
`;

const EditIcon = styled.div`
  color: ${props => props.theme.white};
  cursor: pointer;
  transition: all ease 0.3s;

  :hover{
    opacity: 0.8;
  }
`;

const DeleteIcon = styled.div`
  color: ${props => props.theme.white};
  cursor: pointer;
  transition: all ease 0.3s;

  :hover{
    opacity: 0.8;
  }
`;

const ImageArea = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid #fff;
  border-radius: 50%;
  background-image: url(${props => props.url});
  background-size: contain;
`;

const PetInfo = styled.div`
  color: ${props => props.theme.white};
  font-size: 14px;
  text-align: left;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
`;

const Breed = styled.p`

`;

const Age = styled.p`

`;

const OwnerName = styled.p`

`;

const OwnerTel = styled.p`

`;

export default PetCard;
