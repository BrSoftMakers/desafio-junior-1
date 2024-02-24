import { ReactNode } from "react"
import theme from "../../theme"
import { ButtonIcon, GradientText, StyledButton, Text } from "./styles/button-style"

export enum ButtonVariant {
    'PRIMARY',
    'SECONDARY',
    'DANGER',
}

interface ButtonProps {
    variant?: string
    width?: string
    height?: string
    text?: string
    br?: string
    icon?: ReactNode
    m?: string
    ml?: string
    mr?: string

    onClick?: () => void
}

const Button = ({ ...props }: ButtonProps) => {
    let buttonColor = theme.colors.grey
    let textColor = theme.colors.light
    let buttonText = 'Click me'

    switch(props.variant) {
        case 'PRIMARY':
            buttonColor = `linear-gradient(${theme.gradients.secondGradient})`
            buttonText = props.text ? props.text : buttonText
            break;
        case 'SECONDARY':
            buttonColor = theme.colors.light
            textColor = theme.colors.blue500
            buttonText = props.text ? props.text : buttonText
            break;
        case 'DANGER':
            buttonColor = theme.colors.red
            textColor = theme.colors.light
            buttonText = props.text ? props.text : buttonText
            break;
        default:
            buttonText = props.text ? props.text : buttonText
    }


    return (
        <StyledButton style={{
            color: textColor,
            background: buttonColor,
            height: props.height, 
            width: props.width,
            borderRadius: props.br,
            margin: props.m,
            marginLeft: props.ml,
            marginRight: props.mr,
        }}
        onClick={props.onClick}
        >
            <ButtonIcon> {props.icon} </ButtonIcon>
            { props.variant === 'SECONDARY' ? (<GradientText>{buttonText}</GradientText>) : <Text>buttonText</Text> }
        </StyledButton>
    )
}

export default Button