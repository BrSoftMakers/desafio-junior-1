import React from "react";
import styled from "styled-components";

const Button = ({ children, type, onClick }) => {
  return (
    <Btn type={type} onClick={onClick}>
      {children}
    </Btn>
  );
};

export default Button;

const Btn = styled.button`
  display: block;
  font-size: 1rem;
  color: var(--color-primary);
  background-color: var(--color-secondary);
  border: 1px solid var(--color-primary);
  border-radius: 5px;
  padding: 10px 30px;
  transition-duration: 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;
