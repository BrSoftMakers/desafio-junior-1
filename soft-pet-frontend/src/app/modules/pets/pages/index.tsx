import { AddIcon, Logo, RoundArrowIcon } from "@icons/index"
import { Button, PetCard, SearchBar } from "@components/index"
import { Main, CardContainer, Header, PageContent, PageSelector } from "../styles/pet-page"
import { useEffect, useState } from "react"
import { getAllPets } from "../../chore/api/get-all-pets.service";
import PetModal from "../../chore/components/modal";

export default function PetPage() {
    const [ pets, setPets ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ pageCount, setPageCount ] = useState(1)
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const [ query, setQuery ] = useState('')
    const [ modalType, setModalType ] = useState('')

    const getAllPetsData = async() => {
        try {
            const data = await getAllPets(page, query);
            setPets(data.content);
            setPageCount(data.totalPages)
        } catch(error) {
            console.log('Pets Page:', error);
        }
    }

    useEffect(() => {
        getAllPetsData();
    }, [page, query])


    const handleSearch = (value: string) => {
        setQuery(value)
    }

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

    const handleOpenModal = (event: any) => {
        const type = event.target.outerText

        if(type === 'Cadastrar') {
            setModalType('Create')
        }
        
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return(
        <PageContent>
            <Logo />

            <Header>
                <SearchBar mr="22px" onChange={handleSearch}/>
                <Button variant="PRIMARY" icon={<AddIcon />} text="Cadastrar" onClick={event => handleOpenModal(event)}/>
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

                <PetModal 
                    isOpen={isModalOpen}
                    modalType={modalType}
                    onClose={handleCloseModal}
                />
            </Main>
        </PageContent>
    )
}