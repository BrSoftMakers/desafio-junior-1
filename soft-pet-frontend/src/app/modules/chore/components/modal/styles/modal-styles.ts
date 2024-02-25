import styled from "styled-components";
import theme from "../../../theme";

export const ModalContainer = styled.div`
    background: linear-gradient(${theme.gradients.firstGradient});
    width: 38rem;
    padding: 1rem 0;
    border: 3px solid ${theme.colors.blue300};
    border-radius: 10px;
    box-shadow: 0px 0px 15px 10px #0056E233;
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
`
export const FormArea = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
`

export const WarningText = styled.span`
    font-weight: ${theme.fonts_weight.bold};
    font-size: ${theme.fonts_size.md};
    margin: 1.5rem 0 1.7rem 0;
`

export const ButtonArea = styled.div`
    display: flex;
    justify-content: space-around;

    &>button {
        margin: 1rem;
    }
`