import styled from 'styled-components';

const Main = styled.main`
  width: 100%;
  margin: 80px 0 0;

  display: grid;
  grid-template-columns: repeat(4, 340px);
  grid-gap: 1.5rem;
  justify-content: center;

  @media screen and (max-width: 1400px) {
    display: grid;
    grid-template-columns: repeat(3, 340px);
    grid-gap: 1.5rem;
    justify-content: center;
  }

  @media screen and (max-width: 1080px) {
    display: grid;
    grid-template-columns: repeat(2, 340px);
    grid-gap: 1.5rem;
    justify-content: center;
  }

  @media screen and (max-width: 780px) {
    display: grid;
    grid-template-columns: repeat(1, 340px);
    grid-gap: 2.5rem;
    justify-content: center;
  }
`;

const Button = styled.button`
  margin: 0 0 0 100px;
  color: white;
  background-color: black;
  border: 1px solid black;

  cursor: pointer;
  font-size: 0.85rem;

  height: 40px;
  padding: 0 20px;
  margin-top: 20px;

  transition: 1s;
  &:hover {
    transition: 0.7s;
    background-color: whitesmoke;
    color: black;
  }

  &:focus {
    outline: none;
  }
`;

const Div = styled.div`
  margin-top: 80px;
`;

export { Main, Button, Div };
