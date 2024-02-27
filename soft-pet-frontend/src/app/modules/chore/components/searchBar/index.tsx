import { SearchIcon } from "@icons/index"
import Button from "../button"
import { InputContainer, InputIcon, StyledInput } from "./style/search-bar-style"
import theme from "../../theme"
import { ChangeEvent } from "react"


interface SearchBarProps { 
    mg?: string
    ml?: string
    mr?: string
    onChange?: (value: string) => void
}

const SearchBar = ({ ...props }: SearchBarProps) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        if(props.onChange) { props.onChange(value) }
    }

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

            <StyledInput onChange={handleChange}/>

            <Button mr="2px" height="40px" />
        </InputContainer>
    )
}

export default SearchBar