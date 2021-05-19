import styled from 'styled-components';

export const PetsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0px 50px;
  background: ${props => props.theme.orange};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.h1`
  color: ${props => props.theme.brown};
  font-size: 30px;
  padding-top: 100px;
  padding-bottom: 30px;
`;

export const PetsContent = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 20px 0px;

  @media screen and (max-width: 780px){
    grid-template-columns: 1fr 1fr;
  }
`;

export const NoPets = styled.span`
  font-size: 22px;
  color: #080808;
  text-align: center;
`;