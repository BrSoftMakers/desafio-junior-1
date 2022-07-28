import styled, { css } from "styled-components";

export const FooterWrapper = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgColorDarker};
    height: 15rem;
    box-shadow: 1px 1px 6px 7px rgba(0, 0, 0, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    bottom: 0;
  `}
`;

export const FooterP = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.fontOptional};
    font-size: 2em;
  `}

  @media(max-width: 450px) {
    font-size: 1.5em;
  }
`;
