import styled from "styled-components"
import theme from "../../../theme"

export const FormSection = styled.section`
    width: fit-content;
`

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
    padding: .7rem;
    outline: none;
    width: 100%;
`

export const AnimalType = styled.div`
   display: flex;
   width: 231px;
`

export const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 1.7rem;
    margin-left: .7rem;

    &>input[type="radio"] {
        display: none;
    
        + span {
            display: flex;
            align-items: center;

            &:before {
                content: '';
                border-radius: 100%;
                border: 3px solid ${theme.colors.grey};
                display: inline-block;
                width: .7rem;
                height: .7rem;
                margin-right: .7rem;
                cursor: pointer;
            }
        }
        &:checked {
            + span {
                color: ${theme.colors.light};

                &:before {
                    background: ${theme.colors.light};
                    border: 3px solid ${theme.colors.light};
                }
            }
        }
    }
`

export const StyledRadio = styled.div`
    color: ${theme.colors.grey};
    border: 3px solid ${theme.colors.grey};
    border-radius: 10px;
    width: 100%;
`