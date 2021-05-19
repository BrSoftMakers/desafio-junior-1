import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0px 50px;
  background: ${props => props.theme.bgColor};
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Greetings = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Greeting = styled.span`
  font-size: 31px;
  color: ${props => props.theme.brown};
  margin-bottom: 15px;
`;

export const ShowPetsBtn = styled(LinkS)`
  height: 45px;
  width: 200px;
  padding: 10px 30px;
  border-radius: 30px;
  border: none;
  background: ${props => props.theme.bgButton};
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.white};
  cursor: pointer;
  transition: all ease 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover{
    background: ${props => props.theme.orange};
    color: ${props => props.theme.brown};
  }
`;

export const GreetingImage = styled.img`
  width: 610px;
  height: auto;

  @media screen and (max-width: 1100px){
    width: 400px;
  }
  @media screen and (max-width: 768px){
    width: 0px;
  }
`;
