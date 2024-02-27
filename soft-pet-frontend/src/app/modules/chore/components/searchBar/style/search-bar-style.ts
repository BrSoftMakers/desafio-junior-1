import styled from "styled-components";
import theme from "../../../theme";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 3px solid ${theme.colors.grey};
    border-radius: 10px;
    height: 50px;
    width: 80%;

    @media screen and (max-width: 600px) {
        margin-top: .7rem;
        width: 100%;

        &>button {
            display: none;
        }
    }
`

export const InputIcon = styled.div`
    background-color: ${theme.colors.grey};
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export const StyledInput = styled.input`
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    margin: calc(7px/2);
    padding: 1rem;
    font-size: ${theme.fonts_size.sm};
    color: ${theme.colors.light};
`