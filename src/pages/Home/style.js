import styled, { css } from "styled-components";

export const SectionWrapper = styled.section`
  width: 100%;
  max-height: 100vh;
`;

export const FormRegisterWrapper = styled.div`
  max-height: 100%;
  width: 70%;
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
`;

export const P = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.fontSecundary};
    text-align: center;
    margin-bottom: 30px;
  `}
`;

export const TitleInfo = styled(P)`
  margin-bottom: 0px;
  text-align: left;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Form = styled.form`
  max-width: 100%;
  overflow: hidden;
  margin: 0 15rem 0 15rem;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-items: start;
  justify-content: space-evenly;

  @media (max-width: 1280px) {
    margin: 0 10rem 0 10rem;
  }
  @media (max-width: 1040px) {
    margin: 0 5rem 0 5rem;
  }
  @media (max-width: 820px) {
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: start;
  }
`;

export const InputsWrapperLeft = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 820px){
    margin-bottom: 2rem;
  }
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
  border-bottom: 1px solid #ccc;
  outline: none;
  padding: 0.8em 0;
  background-color: transparent;

  &::placeholder {
    color: #aaa;
  }
`;
