import styled from "styled-components";
import theme from "../../../theme";

export const InputContainer = styled.div`
    width: fit-content;
    border: 3px solid ${theme.colors.grey};
    border-radius: 10px;
`

export const InputIcon = styled.img`
    
`

export const StyledInput = styled.input`
    width: 67rem;
    height: 3rem;
    background: transparent;
    border: none;
    outline: none;
    font-size: ${theme.fonts_size.sm};
    color: ${theme.colors.light}
`