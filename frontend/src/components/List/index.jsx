import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = ({ data, onClick }) => {
  return (
    <div>
      <ListStyle>
        {data.map(({ id, name, telephone }) => {
          return (
            <li>
              <Link to={`/user/${id}`}>
                <Info>
                  <h1>{name}</h1>
                  <span>{telephone}</span>
                </Info>
              </Link>
            </li>
          );
        })}
      </ListStyle>
    </div>
  );
};

export default List;

const ListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  li {
    width: calc(50% - 10px);
  }
`;

const Info = styled.div`
  background-color: var(--color-primary);
  padding: 10px;
  margin-bottom: 10px;
  text-align: center;
  color: var(--color-others);
  border: 2px solid var(--color-primary);
  transition-duration: 0.3s;

  &:hover {
    background-color: var(--color-others);
    color: var(--color-primary);
  }
`;
