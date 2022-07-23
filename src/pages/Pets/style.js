import styled, { css } from "styled-components";

export const SectionWrapper = styled.section`
  width: 100%;
  max-height: 100vh;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.fontSecundary};
  `}
  padding: 20px;
  text-align: center;
`;

export const PetCardWrapper = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.fontSecundary};
  `}
`;

export const PetName = styled.h3``;
