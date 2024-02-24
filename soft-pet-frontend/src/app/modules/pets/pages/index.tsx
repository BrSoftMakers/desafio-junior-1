import { AddIcon, Logo, TrashIcon } from "@icons/index"
import { Button, SearchBar } from "@components/index"
import Main from "../styles/pet-page"

export default function PetPage() {
    return(
        <Main>
            <Logo />
            <SearchBar mr="22px"/>
            <Button variant="PRIMARY" />
            <Button variant="SECONDARY"/>
            <Button />
            <Button variant="DANGER" icon={<TrashIcon />}/>
        </Main>
    )
}