import styled from "styled-components";
import theme from "../../../theme";


export const Modal = styled.div<{ isOpen : boolean }>`
    display: ${props => props.isOpen ? 'block': 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;

    background-color: rgba(0, 0, 0, 0.5);
`

export const ModalContainer = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: ${props => props.isOpen ? 'block' : 'none'};
    background: linear-gradient(${theme.gradients.firstGradient});
    width: 38rem;
    padding: 1rem 0;
    border: 3px solid ${theme.colors.blue300};
    border-radius: 10px;
    box-shadow: 0px 0px 15px 10px #0056E233;

    &::backdrop {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        background-color: black;
        width: 100%;
        height: 100%;
    }
` 

export const ModalContent = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2rem 0;
`

export const TitleArea = styled.div`
    display: flex;
    align-items: center;
`

export const HeaderIcon = styled.div`
    background: linear-gradient(${theme.gradients.secondGradient});
    width: fit-content;
    padding: 16px;
    border-radius: 100%;
`

export const ModalTitle = styled.h1`
    margin-left: 1.5rem;
`
export const CloseButton = styled.div`
    cursor: pointer;
    margin-top: .5rem;
    margin-left: 7.3rem;
`
export const FormArea = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
`

export const WarningText = styled.span`
    font-weight: ${theme.fonts_weight.bold};
    font-size: ${theme.fonts_size.md};
    margin-top: 1.5rem;
`

export const ButtonArea = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 1.7rem;
    
    &>button {
        margin: 1rem;
    }
`