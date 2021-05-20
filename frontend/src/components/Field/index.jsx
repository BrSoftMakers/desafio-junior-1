import React from "react";
import styled from "styled-components";

const Field = ({
  label,
  name,
  type,
  onChange,
  minLength,
  maxLength,
  value,
  required,
}) => {
  return (
    <Content>
      <label htmlFor={name}>{label || name}</label>
      <input
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        minLength={minLength}
        maxLength={maxLength}
        value={value}
        required={required}
      />
    </Content>
  );
};

export default Field;

const Content = styled.div`
  label {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 1rem;
    color: var(--color-primary);
    letter-spacing: 1px;
    display: block;
    margin-bottom: 20px;
  }

  input {
    outline: none;
    border-radius: 5px;
    border: 1px solid transparent;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    padding: 10px;
    font-size: 1rem;
    transition-duration: 0.5s;

    &:hover {
      border: 1px solid var(--color-primary);
    }
  }
`;
