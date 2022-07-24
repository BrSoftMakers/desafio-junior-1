import styled, { css } from "styled-components";

export const SectionWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  margin-bottom: 20rem;
`;

export const FormRegisterWrapper = styled.div`
  max-height: 100%;
  max-width: 85%;
  border-radius: 2%;
  margin: 3rem auto 0 auto;
  box-shadow: 1px 1px 6px 7px rgba(0, 0, 0, 0.125);
`;

export const H1 = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.fontSecundary};
    text-align: center;
    padding: 20px;
  `}

  @media(max-width: 570px) {
    font-size: 1.4em;
  }
`;

export const P = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.fontSecundary};
    text-align: center;
    margin-bottom: 30px;
  `}

  @media(max-width: 570px) {
    font-size: 0.9em;
  }
`;

export const TitleInfo = styled(P)`
  margin-bottom: 0px;
  text-align: left;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Form = styled.form`
  max-width: 100%;
  padding-bottom: 3rem;
  overflow: hidden;
  margin: 0 12rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;

  @media (max-width: 1280px) {
    margin: 0 10rem;
  }
  @media (max-width: 1040px) {
    margin: 0 3rem;
  }
  @media (max-width: 520px) {
    margin: 0 .5rem;
  }
`;

export const InputsWrapperLeft = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 2rem;
`;

export const InputsWrapperRight = styled.div``;

export const LabelInput = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1px;
  align-items: flex-start;
`;

export const SpanInput = styled.span`
  margin: 0.8em 0 0.3em 0;
  font-weight: bold;
  text-align: left;
`;

export const InputText = styled.input`
  box-sizing: border-box;
  border: none;
  width: 300px;
  border-bottom: 1px solid #ccc;
  outline: none;
  padding: 0.8em 0;
  background-color: transparent;

  &::placeholder {
    color: #aaa;
  }
`;

export const ButtonRegister = styled.button`
  margin: 2rem auto 0rem auto;
  background-color: #1a8918;
  color: #fff;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  width: 120px;
  font-weight: bold;
  border: none;
  padding: 10px 15px;
  font-size: 1em;

  &:hover {
    background-color: #0f730c;
    color: #fff;
  }
`;
