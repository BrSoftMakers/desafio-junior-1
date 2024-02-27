import styled from "styled-components"
import theme from "../../../theme"

export const InputLabel = styled.label`
    display: flex;
    margin: .8rem 0 0.5rem 0;

    &>span{
      margin-left: .6rem;
    }

    &>span>span {
        color: ${theme.colors.grey};
    }
`

export const StyledInput = styled.input`
    background: transparent;
    border: 3px solid ${theme.colors.grey};
    border-radius: 10px;
    height: 2rem;
    color: ${theme.colors.light};
    padding-left: .7rem;
    outline: none;
    width: 100%;
`