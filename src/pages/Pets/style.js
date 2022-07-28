import styled, { css } from "styled-components";

export const SectionWrapper = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgColor};
  `}
  width: 100%;
  min-height: 100vh;
  padding-bottom: 20rem;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.fontSecundary};
  `}
  padding: 2rem 0rem 0rem 0rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const PetCardWrapper = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.fontSecundary};
  `}
`;
