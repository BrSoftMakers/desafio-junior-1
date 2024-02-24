import Button from "../button"
import { InputContainer, InputIcon, StyledInput } from "./style/search-bar-style"


interface SearchBarProps { 
    mg?: string
    ml?: string
    mr?: string
    onChange?: () => void
}

const SearchBar = ({ ...props }: SearchBarProps) => {
    return(
        <InputContainer
            style={{
                margin: props.mg,
                marginLeft: props.ml,
                marginRight: props.mr
            }}
        >
            <InputIcon />
            <StyledInput onChange={props.onChange}/>
            <Button />
        </InputContainer>
    )
}

export default SearchBar