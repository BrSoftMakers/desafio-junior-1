import styled from "styled-components";
import theme from "../../../theme";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    border: 3px solid ${theme.colors.grey};
    border-radius: 10px;
`

export const InputIcon = styled.div`
    background-color: ${theme.colors.grey};
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledInput = styled.input`
    width: 60rem;
    height: 3rem;
    background: transparent;
    border: none;
    outline: none;
    margin: calc(7px/2);
    padding: 1rem;
    font-size: ${theme.fonts_size.sm};
    color: ${theme.colors.light}
`