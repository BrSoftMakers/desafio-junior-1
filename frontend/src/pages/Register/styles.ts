import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;

  div {
    display: flex;
    align-items: center;
    img {
      width: 64px;
      height: 64px;
      border-radius: 20%;
    }
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 35px;
  color: #3a3a3a;
  max-width: 400px;
  margin-left: 20px;
`;

export const FormContainer = styled.div`
  margin-left: 20%;
  margin-top: 85px;
  max-width: 240px;
  border-color: #3d3d4d;
  border-width: 1px;
  border-style: solid;
  padding: 20px;
  display: flex;
  justify-content: center;

  strong {
    font-size: 20px;
    color: #3a3a3a;
  }

  button {
    margin-left: 45px;
    margin-top: 30px;
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
  }
`;

export const InfoDiv = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;

  max-width: 660px;
`;

export const InputDiv = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;

  p {
    margin-right: 5px;
  }

  div {
    display: flex;
    flex-direction: row;
  }
`;
