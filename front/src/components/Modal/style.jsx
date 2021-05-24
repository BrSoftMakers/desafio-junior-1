import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 0;
  border: 1px solid black;

  @media screen and (max-width: 820px) {
    width: 500px;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 0 20px 50px;

  color: #141414;

  h1 {
    text-transform: uppercase;
  }

  p {
    margin-bottom: 1rem;
  }
`;

const CloseModalButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const ModalImg = styled.img`
  margin: auto 0;

  width: 95%;
  height: 100%;
  max-height: 500px;
  background: #000;
  object-fit: cover;
`;

export { ModalImg, CloseModalButton, ModalContent, ModalWrapper, Background };
