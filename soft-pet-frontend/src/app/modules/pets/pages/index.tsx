import { AddIcon, Logo, RoundArrowIcon, TrashIcon } from "@icons/index"
import { Button, PetCard, SearchBar } from "@components/index"
import { Main, CardContainer, Header, PageContent, PageSelector } from "../styles/pet-page"
import { useEffect, useState } from "react"
import { getAllPets } from "../../chore/api/get-all-pets.service";

export default function PetPage() {
    const [ pets, setPets ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ pageCount, setPageCount ] = useState(1)

    const getAllPetsData = async() => {
        try {
            const data = await getAllPets(page);
            setPets(data.content);
            setPageCount(data.totalPages)
        } catch(error) {
            console.log('Pets Page:', error);
        }
    }

    useEffect(() => {
        getAllPetsData();
    }, [page])


    const handlePrevPage = () => {
        if(page <= 1) {
            setPage(1)
            return
        }
        setPage(page - 1)
    }

    const handleNextPage = () => {
        setPage(page + 1)
        if(page >= pageCount) {
            setPage(pageCount)
        }
    }

    return(
        <PageContent>
            <Logo />

            <Header>
                <SearchBar mr="22px"/>
                <Button variant="PRIMARY" icon={<AddIcon />} text="Cadastrar"/>
            </Header>

            <Main>
                <CardContainer>
                    {pets.map(pet => (<PetCard data={pet} />))}
                </CardContainer>

                <PageSelector>
                    <RoundArrowIcon variant w="22" onClick={handlePrevPage} />
                    <p>
                        {page} de {pageCount}
                    </p>
                    <RoundArrowIcon variant w="22" onClick={handleNextPage} direction="right"/>
                </PageSelector>
            </Main>
        </PageContent>
    )
}