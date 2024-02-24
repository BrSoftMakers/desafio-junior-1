import Button from "../../chore/components/button"
import SearchBar from "../../chore/components/searchBar"
import Main from "../styles/pet-page"

export default function PetPage() {
    return(
        <Main>
            <SearchBar mr="22px"/>
            <Button variant="PRIMARY"/>
            <Button variant="SECONDARY"/>
            <Button />
            <Button variant="DANGER"/>
        </Main>
    )
}