import { AddIcon, CalendarIcon, CloseIcon, DnaIcon, DogTagIcon, EditIcon, OwnerIcon, PhoneIcon, RoundArrowIcon, TrashIcon } from "@icons/index"
import { ButtonArea, CloseButton, FormArea, HeaderIcon, Modal, ModalContainer, ModalContent, ModalHeader, ModalTitle, TitleArea, WarningText } from "./styles/modal-styles"
import { AnimalType, FormSection, InputLabel, RadioLabel, StyledInput, StyledRadio } from "./styles/form-style"
import { Button } from "@components/index"
import { Pet } from "../../models/pet";
import { useState } from "react";

interface ModalInterface {
    isOpen: boolean;
    modalType: string;
    petData?: Pet | null

    onClose?: () => void;
}

const PetModal = ({ ...props }: ModalInterface) => {
    const [ bith, setBirth ] = useState('')

    let buttonIcon = <DogTagIcon />
    let modalTitle = 'Modal'
    let modalIcon = <DogTagIcon />
    let actionButtonVariant = 'PRIMARY'

    switch(props.modalType) {
        case('Create'):
            modalTitle = 'Cadastrar';
            modalIcon = <AddIcon w="40" />;
            buttonIcon = <AddIcon />;
            break; 
        case('Delete'):
            modalTitle = 'Remover';
            modalIcon = <TrashIcon w='42' h="40"/>;
            buttonIcon = <TrashIcon />;
            actionButtonVariant = 'DANGER'
            break;
        case('Edit'):
            modalTitle = "Editar";
            modalIcon = <EditIcon w='39' variant/>;
            buttonIcon = <EditIcon variant/>;
            break;
        default:
            modalTitle
    }
    
    return (
        <Modal isOpen={props.isOpen}>
            <ModalContainer isOpen={props.isOpen}>
                <ModalHeader>
                    <TitleArea>
                        <HeaderIcon>
                            {modalIcon}
                        </HeaderIcon>
        
                        <ModalTitle>
                            {modalTitle}
                        </ModalTitle>
                    </TitleArea>
                    
                    <CloseButton onClick={props.onClose}>
                        <CloseIcon />
                    </CloseButton>
                </ModalHeader>
    
                <ModalContent>
                    <FormArea>
                        <FormSection>
                            <InputLabel>
                                <DogTagIcon />
                                <span>Nome</span>
                            </InputLabel>
                            <StyledInput 
                                type="text" 
                                placeholder="Nome Sobrenome"
                            />
        
                            <InputLabel>
                                <OwnerIcon />
                                <span>Dono</span>
                            </InputLabel>
                            <StyledInput type="text" placeholder="Nome Sobrenome"/>
        
                            <InputLabel>
                                <PhoneIcon />
                                <span>Telefone</span>
                            </InputLabel>
                            <StyledInput type="text" placeholder="(00) 0 0000-0000"/>
        
                        </FormSection>
        
                        <FormSection>
                            <InputLabel>
                                <DnaIcon />
                                <span>Animal</span>
                            </InputLabel>
                            <AnimalType>
                                <StyledRadio>
                                    <RadioLabel>
                                        <StyledInput type="radio" id="DOG" name="animal_type"/>
                                        <span>Cachorro</span>
                                    </RadioLabel>
                                </StyledRadio>
        
                                <StyledRadio >
                                    <RadioLabel>
                                        <StyledInput type="radio" id="CAT" name="animal_type"/>
                                        <span>Gato</span>
                                    </RadioLabel>
                                </StyledRadio>
                            </AnimalType>
        
                            <InputLabel>
                                <DnaIcon />
                                <span>Raça</span>
                            </InputLabel>
                            <StyledInput type="text" placeholder="Raça"/>
        
                            <InputLabel>
                                <CalendarIcon />
                                <span>Nascimento <span>(Aproximado)</span> </span>
                            </InputLabel>
                            <StyledInput 
                                type="date" 
                                
                            />
                        </FormSection>  
                    </FormArea>
    
                    <WarningText>Tem certeza que deseja remover esse pet?</WarningText>
                </ModalContent>
                
                <ButtonArea>
                    <Button onClick={props.onClose} variant="SECONDARY" icon={ <RoundArrowIcon/> } text="Voltar" height="40px" />
                    <Button variant={actionButtonVariant} icon={buttonIcon} text={modalTitle} height="40px" />
                </ButtonArea>
            </ModalContainer>
        </Modal>
    )
}

export default PetModal