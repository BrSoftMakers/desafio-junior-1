import styled from 'styled-components';

export const Div = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;

  @media screen and (max-width: 780px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
  }

  padding: 10px;
  margin-top: 15px;

  div {
    display: flex;
    flex-direction: column;
  }

  .field {
    border: 1px solid black;
    height: 10px;
    width: 260px;
    margin-top: 0.5rem;

    padding: 1rem;
  }

  .field:focus {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
    outline: none;
  }
`;

export const Button = styled.button`
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
