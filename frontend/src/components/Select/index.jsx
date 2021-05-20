import React from "react";
import styled from "styled-components";

const Select = ({ label, name, options = [], onChange }) => {
  return (
    <Content>
      <Label htmlFor={name}>{label}</Label>
      <SelectStyle name={name} id={name} onChange={onChange}>
        <option value="">Choose here</option>
        {options.map(({ id, name }) => {
          return (
            <option value={id} key={id}>
              {name}
            </option>
          );
        })}
      </SelectStyle>
    </Content>
  );
};

export default Select;

const Content = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1rem;
  color: var(--color-primary);
  letter-spacing: 1px;
  margin-bottom: 10px;
`;

const SelectStyle = styled.select`
  width: 100%;
  outline: none;
  border-radius: 5px;
  border: 1px solid transparent;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  background-color: var(--color-secondary);
  color: var(--color-primary);
  padding: 10px;
  font-size: 1rem;
  transition-duration: 0.5s;

  &:hover {
    border: 1px solid var(--color-primary);
  }
`;
