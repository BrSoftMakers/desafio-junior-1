import styled from 'styled-components';

export const CardContainer = styled.div`
  display: block;
  margin: 20px 8px;
`;

export const CardItem = styled.div`
  background: lightgray;
  color: black;

  width: 320px;
  height: 410px;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.5);
  }

  img {
    height: 320px;
    width: 320px;
    object-fit: cover;
    margin-bottom: 6px;
  }

  p {
    font-weight: 600;
    text-transform: uppercase;
  }

  p,
  span {
    bottom: -3px;
    font-size: 15px;
    margin-left: 6px;
  }
`;

export const IconsCSS = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  .icon {
    cursor: pointer;
    margin: 0 5px;

    transition: 1s all;
    &:hover {
      color: black;
    }
  }
`;
