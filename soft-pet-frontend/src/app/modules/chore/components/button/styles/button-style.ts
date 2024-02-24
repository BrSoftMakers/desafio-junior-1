import styled from "styled-components";
import theme from "../../../theme";

export const StyledButton = styled.button `
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: ${props => props.width ? props.width : '231px'};
    height: ${props => props.height ? props.height : '50px'};
    border: none;
    border-radius: ${props => props.borderRadius? props.borderRadius : '5px'};
    font-size: ${theme.fonts_size.sm};
    font-weight: ${theme.fonts_weight.bold};
    cursor: pointer;

    margin: ${props => props.margin ? props.margin : ''};
    margin-left: ${props => props.marginLeft ? props.marginLeft : ''};
    margin-right: ${props => props.marginRight ? props.marginRight : ''};

    &:hover {
        opacity: 0.8;
    }

`
export const ButtonIcon = styled.span`
    align-self: center;
    margin-right: 8px;
`

export const Text = styled.span`
    
`

export const GradientText = styled.span`
    background: linear-gradient(${theme.gradients.secondGradient});
    background-clip: text;
    -webkit-text-fill-color: transparent;
`