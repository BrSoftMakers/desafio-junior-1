import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  ${({ theme }) => css`
     {
      background-color: ${theme.colors.bgColorDarker};
    }
  `}
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 2px 2px 14px 8px rgba(0, 0, 0, 0.3);
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
`;

export const NavbarLinkRight = styled(NavbarLink)`
  font-size: 1.5rem;
`;
