import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem 1rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
  position: relative;
  background: ${props => props.theme.brown};
  color: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px){
    width: 80%;
  }
`;

export const CloseIcon = styled.div`
  width: 30px;
  height: 30px;
  font-size: 30px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  margin-left: 90%;
  margin-top: 1%;

  :hover{
    opacity: 0.7;
  }
`;

export const PetImage = styled.img`
  width: 150px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

export const PetInfoForm = styled.form`
  width: 100%;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const PetInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  span{
    color: #000;
    margin-top: 10px;
    margin-bottom: 0px;
  }

  input{
    font-size: 14px;
    padding: 0px 5px 5px 0px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.orange};
    background: none;
    outline: none;
    color: #fff;
  }

  label{
    margin-left: 5px;
  }
`;

export const SaveBtn = styled.button`
  width: 50%;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 30px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  background: ${props => props.theme.bgColor};
  margin-top: 30px;
  
  :hover{
    opacity: 0.7;
  }
`;