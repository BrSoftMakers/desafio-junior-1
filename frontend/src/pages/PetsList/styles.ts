import styled from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  selected: boolean;
}

export const Header = styled.header`
  display: flex;
  align-items: center;

  img {
    width: 64px;
    height: 64px;
    border-radius: 20%;
  }
`;

export const Title = styled.h1`
  font-size: 35px;
  color: #3a3a3a;
  max-width: 450px;
  margin-left: 20px;
`;

export const Menu = styled.div`
  max-width: 700px;
  display: flex;
  padding: 30px 80px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const MenuButton = styled.button`
  background: #3db0f7;
  height: 25px;
  width: 100px;
  border-radius: 5px;
  border: 0;
  padding: 0 16px;
  color: #312e38;

  &:hover {
    background: ${shade(0.2, '#3db0f7')};
  }

  margin-left: 5px;
`;

export const Pets = styled.div`
  max-width: 700px;
  height: 500px;
  border-color: #3d3d4d;
  border-width: 1px;
  border-style: solid;
  padding: 10px;
  overflow-y: scroll;

  html {
    scroll-behavior: smooth;
  }
`;

export const PetsContainer = styled.div`
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 5px;

  display: flex;
  align-items: center;

  &:hover {
    background: ${shade(0.1, '#fff')};
  }

  img {
    width: 45px;
    height: 45px;
    border-radius: 20%;
    margin-left: 15px;
    margin-right: 15px;
    border-color: #3d3d4d;
    border-width: 1px;
    border-style: solid;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Bloco = styled.div`
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    margin-right: 10px;

    strong {
      font-size: 14px;
      color: #3d3d4d;
      margin: 1px;
    }

    p {
      font-size: 14px;
      color: #3d3d4d;
      margin: 1px;
    }
  }
`;

export const PetsButton = styled.button<ButtonProps>`
  border-color: #3db0f7;
  background: none;
  border-radius: 9px;

  border-width: ${props => (props.selected ? '3' : '0')}px;

  width: 100%;

  & + button {
    margin-top: 5px;
  }
`;
