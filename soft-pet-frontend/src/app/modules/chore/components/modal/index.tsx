import { AddIcon, CalendarIcon, CloseIcon, DnaIcon, DogTagIcon, OwnerIcon, PhoneIcon, RoundArrowIcon, TrashIcon } from "@icons/index"
import { ButtonArea, CloseButton, FormArea, HeaderIcon, ModalContainer, ModalContent, ModalHeader, ModalTitle, TitleArea, WarningText } from "./styles/modal-styles"
import { AnimalType, FormSection, InputLabel, RadioLabel, StyledInput, StyledRadio } from "./styles/form-style"
import { Button } from "@components/index"

interface ModalInterface {

}

const Modal = ({ ...props }: ModalInterface) => {
    return (
        <ModalContainer>
            <ModalHeader>
                <TitleArea>
                    <HeaderIcon>
                        <AddIcon w="40"/>
                    </HeaderIcon>
    
                    <ModalTitle>
                        Cadastrar
                    </ModalTitle>
                </TitleArea>
                
                <CloseButton>
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
                        <StyledInput type="text" placeholder="Nome Sobrenome"/>
    
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
                        <StyledInput type="date" />
                    </FormSection>  
                </FormArea>

                <WarningText>Tem certeza que deseja remover esse pet?</WarningText>

                <ButtonArea>
                    <Button variant="SECONDARY" icon={ <RoundArrowIcon/> } text="Voltar" height="40px" />
                    <Button variant="PRIMARY" icon={ <AddIcon/> } text="Cadastrar" height="40px" />
                </ButtonArea>

            </ModalContent>
        </ModalContainer>
    )
}

export default Modal