import React from "react";
import { Link } from "react-router-dom";
import { IoMdPaw } from "react-icons/io";
import styled from "styled-components";

const Header = () => {
  return (
    <header>
      <Content>
        <div className="container">
          <Nav>
            <Logo to="/">
              <IoMdPaw />
            </Logo>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </Nav>
        </div>
      </Content>
    </header>
  );
};

export default Header;

const Content = styled.div`
  background-color: var(--color-others);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;

  ul {
    display: flex;
    li {
      text-align: center;
      margin: 0 10px;
      padding: 10px 20px;

      a {
        color: var(--color-primary);
      }

      ul {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

const Logo = styled(Link)`
  font-size: 3rem;
  color: var(--color-primary);
`;
