import { Button } from ".."
import { CalendarIcon, CatIcon, ChevronIcon, DnaIcon, DogIcon, DogTagIcon, EditIcon, OwnerIcon, PhoneIcon, TrashIcon } from "@icons/index"
import { Pet } from "../../models/pet"
import { Card, CardSection, CardText, DropDown, DropDownButtonsArea, DropDownContent, DropDownMenu, DropDownSection, DropDownText, MainCard, PetType } from "./styles/card-pet-style"
import { useEffect, useState } from "react"
import { differenceInYears, format } from "date-fns"

interface PetCardProps {
    data: Pet
}

const PetCard = ({ ...props }: PetCardProps) => {
    const [ birth, setBirth ] = useState('Idade (DD/MM/AA)');
    const [ dropDownStatus, setDropDownStatus ] = useState(false)

    const formatBirth = () => {
        const formatedDate = format(props.data.birth, "dd/MM/yyyy")
        const age = differenceInYears(new Date(), props.data.birth);
        setBirth(`${age} Anos (${formatedDate})`)
    }

    useEffect(() => {
        formatBirth();
    })

    const toggleDropdown = () => {
        setDropDownStatus(!dropDownStatus)
    }

    return(
        <Card>
            <MainCard onClick={toggleDropdown}>
                <CardSection>
                    <PetType>
                        { props.data.petTypeId === 1 ? (<CatIcon />) : (<DogIcon />) }
                    </PetType>
    
                </CardSection>
                
                <CardSection>
                    <CardText>
                     <DogTagIcon />
                     <span>{props.data.name}</span>
                    </CardText>
                    
                    <CardText>
                        <OwnerIcon />
                        <span>{props.data.ownerName}</span>
                    </CardText>
    
                </CardSection>

                <CardSection>
                    <DropDownMenu 
                        className={dropDownStatus ? 'rotate' : ''} 
                        onClick={toggleDropdown}
                    >
                        <ChevronIcon />
                    </DropDownMenu>
                </CardSection>
            </MainCard>

            <DropDown className={dropDownStatus ? 'dropDownActive' : ''}>
                    <DropDownSection>
                        <DropDownContent>
                            <DropDownText>
                                <DnaIcon/>
                                <span>Raça: {props.data.breed}</span>
                            </DropDownText>
    
                            <DropDownText>
                                <PhoneIcon />
                                <span>Telefone: {props.data.ownerPhone}</span>
                            </DropDownText>

                            <DropDownText>
                                <CalendarIcon />
                                <span>Idade: {birth}</span>
                            </DropDownText>

                        </DropDownContent>
                    </DropDownSection>
                    
                    <DropDownSection>
                        <DropDownButtonsArea>
                            <Button variant="SECONDARY" text="Editar" icon={<EditIcon />}/>
                            <Button variant="PRIMARY" text="Remover" icon={<TrashIcon />} />
                        </DropDownButtonsArea>
                    </DropDownSection>

            </DropDown>
        </Card>
    )
}

export default PetCard
