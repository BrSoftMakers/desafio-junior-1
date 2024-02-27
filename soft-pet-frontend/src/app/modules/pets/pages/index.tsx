import { AddIcon, Logo, RoundArrowIcon } from "@icons/index"
import { Button, PetCard, SearchBar } from "@components/index"
import { Main, CardContainer, Header, PageContent, PageSelector } from "../styles/pet-page"
import { useContext, useEffect, useState } from "react"
import PetModal from "../../chore/components/modal";
import { ModalType } from "../../chore/models";
import { PetsContext } from "../../chore/hooks/petsProvider";

export default function PetPage() {
    const { pets, currentPage, totalPages, getAllPetsData } = useContext(PetsContext)!
    const [ page, setPage ] = useState(1)
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const [ query, setQuery ] = useState('')
    const [ modalType, setModalType ] = useState<ModalType>('Create')


    useEffect(() => {
        getAllPetsData(page, query);
    }, [page, query])


    const handleSearch = (value: string) => {
        setQuery(value)
        getAllPetsData(currentPage, query)
    }

    const handlePrevPage = () => {
        setPage(Math.max(currentPage - 1, 1))
    }

    const handleNextPage = () => {
        page >= totalPages ? page : setPage(currentPage + 1)
    }

    const handleOpenModal = (type: ModalType) => {
        setModalType(type)
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const handleOperationSuccess = async () => {
        setIsModalOpen(false);
        getAllPetsData(1, '')
    }

    return(
        <PageContent>
            <Logo />

            <Header>
                <SearchBar mr="22px" onChange={handleSearch}/>
                <Button variant="PRIMARY" icon={<AddIcon />} text="Cadastrar" onClick={() => handleOpenModal('Create')}/>
            </Header>

            <Main>
                <CardContainer>
                    {pets.map(pet => (<PetCard data={pet} />))}
                </CardContainer>

                <PageSelector>
                    <RoundArrowIcon variant w="22" onClick={handlePrevPage} />
                    <p>
                        {page} de {totalPages}
                    </p>
                    <RoundArrowIcon variant w="22" onClick={handleNextPage} direction="right"/>
                </PageSelector>

                <PetModal 
                    isOpen={isModalOpen}
                    modalType={modalType}
                    onClose={handleCloseModal}
                    onOperationSuccess={handleOperationSuccess}
                />
            </Main>
        </PageContent>
    )
}