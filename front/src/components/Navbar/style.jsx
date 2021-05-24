import styled from 'styled-components';

const HeaderCSS = styled.nav`
  background: #121214;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;

  width: 100%;
  height: 60px;
  padding: 0 15px 0 25px;

  .mobile {
    display: none;
  }

  .icon {
    cursor: pointer;
  }

  input {
    text-transform: lowercase;
  }

  @media screen and (max-width: 780px) {
    .nav-menu {
      display: none;
      transform: all 1s;
    }

    .activ {
      display: none;
    }

    .mobile {
      display: inline-block;
      margin: 0 5px;
    }

    form {
      .btn {
        margin-left: -60px;
      }
    }
  }
`;

const Principal = styled.div`
  cursor: pointer;
  transition: 1s all;

  &:hover {
    color: #706fd3;
  }
`;

const Ul = styled.ul`
  list-style: none;

  display: flex;

  li {
    padding: 0 10px;
  }

  a {
    text-decoration: none;
    color: whitesmoke;

    &:hover {
      border-bottom: solid 2px whitesmoke;
    }
  }
`;

const Form = styled.form`
  margin: 10px;

  $background: #f5f6fa;
  $text: #9c9c9c;

  .btn {
    display: inline-block;
    background: transparent;
    font: inherit;
    border: 0;
    outline: 0;
    padding: 0;
    transition: all 200ms ease-in;
    text-transform: uppercase;
    cursor: pointer;

    &--primary {
      background: lightgray;
      color: whitesmoke;
      box-shadow: 0 5px 5px 1px rgba(0, 0, 0, 0.3);

      padding: 3.5px 8px;
      transition: 0.8s;

      &:hover {
        transition: 0.8s;
        background: black;
      }
    }

    &--inside {
      margin-left: -45px;
    }
  }

  input {
    background: #fff;
    box-shadow: 0 5px 5px 1px rgba(0, 0, 0, 0.3);
    border: 0;
    outline: 0;
    padding: 10px;
  }
`;

export { HeaderCSS, Ul, Principal, Form };
