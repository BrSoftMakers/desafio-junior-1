import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  ${({ theme }) => css`
     {
      background-color: ${theme.colors.bgColorDarker};
    }
  `}
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 1px 1px 7px 4px rgba(0, 0, 0, 0.3);
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5%;
`;

export const NavbarLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.fonts.family.fontSecundary};
  `}
  font-size: 2rem;
  padding: 10px;
  text-decoration: none;
  display: flex;

  @media (max-width: 700px) {
    font-size: 2rem;
  }

  @media (max-width: 450px) {
    font-size: 1.8rem;
  }

  &:hover{
    opacity: .8;
    transform: scale(1.05);
    color: #1a8918;
  }
`;

export const NavbarLinkRight = styled(NavbarLink)`
  font-size: 1.5rem;

  @media (max-width: 700px) {
    font-size: 1.5rem;
  }

  @media (max-width: 450px) {
    font-size: 1.2rem;
  }
`;

export const Span = styled.span`
  ${({ theme }) => css`
     {
      color: ${theme.colors.defaultGreen};
      font-weight: bolder;
      text-transform: uppercase;
      margin-left: 0.2rem;
      display: inline-block;
    }
  `}
`;
