import React from "react";
import styled from "styled-components";

const Card = ({ pet }) => {
  const race = pet.race;
  const owner = pet.user;
  console.log(pet);
  return (
    <Content>
      <Name>{pet.name}</Name>
      <InfoPet>
        <span>
          <b>Type: </b>
          {race.type}
        </span>
        <span>
          <b>Race: </b>
          {race.name}
        </span>
        <span>
          <b>Age: </b>
          {pet.age}
        </span>
      </InfoPet>
      <Owner>Owner</Owner>
      <InfoOwner>
        <span>
          <b>Name: </b>
          {owner.name}
        </span>
        <span>
          <b>Telephone: </b>
          {owner.telephone}
        </span>
      </InfoOwner>
    </Content>
  );
};

export default Card;

const Content = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--color-primary);
  color: var(--color-others);
  cursor: pointer;
  transition-duration: 0.3s;

  &:hover {
    transform: scale(1.025);
  }
`;

const Name = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 10px;
`;

const Owner = styled.span`
  display: block;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 10px 0;
`;

const InfoPet = styled.div`
  background-color: var(--color-others);
  padding: 10px;
  border-radius: 5px;

  span {
    display: block;
    font-size: 1rem;
    color: var(--color-primary);
    margin-right: 5px;
  }
`;

const InfoOwner = styled.div`
  background-color: var(--color-others);
  padding: 10px;
  border-radius: 5px;

  span {
    display: block;
    font-size: 1rem;
    color: var(--color-primary);
    margin-right: 5px;
  }
`;
