import { SearchIcon } from "@icons/index"
import Button from "../button"
import { InputContainer, InputIcon, StyledInput } from "./style/search-bar-style"
import theme from "../../theme"


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
            <InputIcon>
                <SearchIcon />
            </InputIcon>

            <StyledInput onChange={props.onChange}/>

            <Button m="7px"/>
        </InputContainer>
    )
}

export default SearchBar