import React, { useState } from 'react'
import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';

import PetRegisterModal from './PetRegisterModal';

const Header = () => {
  const [showRegister, setShowRegister] = useState(false);

  function closeRegister(){
    setShowRegister(false);
  }

  return (
    <>
      { showRegister && <PetRegisterModal close={closeRegister} /> }
      <Container>
        <Logo to="homePage" smooth="true" duration={500} >PetShop</Logo>

        <RegisterBtn onClick={() => setShowRegister(true)} >Cadastrar Pet</RegisterBtn>
      </Container>
    </>
  );
}

const Container = styled.nav`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
  background: ${props => props.theme.bgColor};
  position: fixed;
  left: 0;
  top: 0;

  @media screen and (max-width: 768px){
    padding: 0px 30px;
  }
`;

const Logo = styled(LinkS)`
  color: ${props => props.theme.brown};
  font-size: 31px;
  font-weight: bold;
  cursor: pointer;

  @media screen and (max-width: 768px){
    font-size: 25px;
  }
`;

const RegisterBtn = styled.button`
  height: 45px;
  padding: 10px 50px;
  border-radius: 30px;
  border: none;
  background: ${props => props.theme.brown};
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme.white};
  cursor: pointer;
  transition: all ease 0.2s;

  :hover{
    background: ${props => props.theme.orange};
    color: ${props => props.theme.brown};
  }

  @media screen and (max-width: 768px){
    padding: 5px 20px;
    font-size: 12px;
  }
`;

export default Header;
