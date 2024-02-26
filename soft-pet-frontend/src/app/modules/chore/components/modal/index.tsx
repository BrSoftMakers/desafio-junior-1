import { AddIcon, CalendarIcon, CloseIcon, DnaIcon, DogTagIcon, EditIcon, OwnerIcon, PhoneIcon, RoundArrowIcon, TrashIcon } from "@icons/index"
import { ButtonArea, CloseButton, FormArea, HeaderIcon, Modal, ModalContainer, ModalContent, ModalHeader, ModalTitle, TitleArea, WarningText } from "./styles/modal-styles"
import { AnimalType, ErrorText, FormSection, InputLabel, RadioLabel, StyledInput, StyledRadio } from "./styles/form-style"
import { Button } from "@components/index"
import { Pet } from "../../models/pet";
import { useFormik } from "formik";
import formSchema from "../card/validation/form-validation";
import { numberMask } from "../../utils/numberMask";
import React from "react";
import { format } from "date-fns";
import { createPet } from "../../api";
import { PetData } from "../../models/create-pet";
import { editPet } from "../../api/edit-pet.service";

interface ModalInterface {
    isOpen: boolean;
    modalType: string;
    petData?: Pet | null

    onClose?: () => void;
}

const PetModal = ({ ...props }: ModalInterface) => {
    const operationFunction: Record<string, (pet: PetData) => Promise<void> > = {
        'Create': createPet,
        'Edit': editPet
    }

    let buttonIcon = <DogTagIcon />
    let modalTitle = 'Modal'
    let modalIcon = <DogTagIcon />
    let actionButtonVariant = 'PRIMARY'
    let disableButton = false
    let petId: string | null = null

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
            disableButton = true
            petId = props.petData?.id ?? null
            break;
        case('Edit'):
            modalTitle = "Editar";
            modalIcon = <EditIcon w='39' variant/>;
            buttonIcon = <EditIcon variant/>;
            petId = props.petData?.id ?? null
            break;
        default:
            modalTitle
    }

    const ValidPet = useFormik({
        initialValues: {
            name: '',
            ownerName: '',
            ownerPhone: '',
            petType: '',
            breed: '',
            birth: '',
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            const date = new Date(values.birth)

            const pet = {
                ...values,
                birth: date,
                id: petId
            }

            const operation = operationFunction[props.modalType]

            operation ? operation(pet) : ''
            // console.log(pet);
        }
    })

    React.useEffect(() => {
        if((props.modalType === 'Edit' || props.modalType === 'Delete') && props.petData) {
            const petType = props.petData.petTypeId === 1 ? 'DOG' : 'CAT';
            const formatedBirth = format(props.petData.birth, "yyyy-MM-dd");

            ValidPet.setValues({
                name: props.petData.name,
                ownerName: props.petData.ownerName,
                ownerPhone: props.petData.ownerPhone,
                petType: petType,
                breed: props.petData.breed,
                birth: formatedBirth
            })
        }
    }, [props.modalType, props.petData])

    return (
        <Modal isOpen={props.isOpen} >
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
    
                <ModalContent onSubmit={ValidPet.handleSubmit}>
                    <FormArea>
                        <FormSection>
                            <InputLabel>
                                <DogTagIcon />
                                <span>Nome</span>
                            </InputLabel>
                            <StyledInput 
                                type="text" 
                                placeholder="Nome Sobrenome"
                                name="name"
                                onChange={ValidPet.handleChange}
                                onBlur={ValidPet.handleBlur}
                                value={ValidPet.values.name}
                                disabled={disableButton}
                            />
                            {ValidPet.touched.name && ValidPet.errors.name ? (
                                <ErrorText>{ ValidPet.errors.name }</ErrorText>
                            ): null}
        
                            <InputLabel>
                                <OwnerIcon />
                                <span>Dono</span>
                            </InputLabel>
                            <StyledInput 
                                type="text" 
                                placeholder="Nome Sobrenome"
                                name="ownerName"
                                onChange={ValidPet.handleChange}
                                onBlur={ValidPet.handleBlur}
                                value={ValidPet.values.ownerName}
                                disabled={disableButton}
                            />
                            {ValidPet.touched.ownerName && ValidPet.errors.ownerName ? (
                                <ErrorText>{ ValidPet.errors.ownerName }</ErrorText>
                            ): null}
        
                            <InputLabel>
                                <PhoneIcon />
                                <span>Telefone</span>
                            </InputLabel>
                            <StyledInput 
                                name="ownerPhone"
                                type="text" 
                                placeholder="(00) 0 0000-0000"
                                maxLength={15}
                                onBlur={ValidPet.handleBlur}
                                value={ValidPet.values.ownerPhone}
                                onChange={e => {
                                    const numberMasked = numberMask(e.target.value)
                                    ValidPet.setFieldValue(
                                        "ownerPhone",
                                        numberMasked
                                    );
                                }}
                                disabled={disableButton}
                            />
                            {ValidPet.touched.ownerPhone && ValidPet.errors.ownerPhone ? (
                                <ErrorText>{ ValidPet.errors.ownerPhone }</ErrorText>
                            ): null}

                        </FormSection>
        
                        <FormSection>
                            <InputLabel>
                                <DnaIcon />
                                <span>Animal</span>
                            </InputLabel>
                            <AnimalType>
                                <StyledRadio>
                                    <RadioLabel>
                                        <StyledInput 
                                            type="radio" 
                                            id="DOG" 
                                            name="petType"
                                            onChange={() => ValidPet.setFieldValue('petType', 'DOG')}
                                            onBlur={ValidPet.handleBlur}
                                            checked={ValidPet.values.petType === "DOG"}
                                            disabled={disableButton}
                                        />
                                        <span>Cachorro</span>
                                    </RadioLabel>
                                </StyledRadio>
        
                                <StyledRadio >
                                    <RadioLabel>
                                        <StyledInput 
                                            type="radio" 
                                            id="CAT" 
                                            name="petType"
                                            onChange={() => ValidPet.setFieldValue('petType', 'CAT')}
                                            onBlur={ValidPet.handleBlur}
                                            checked={ValidPet.values.petType === "CAT"}
                                            disabled={disableButton}
                                        />
                                        <span>Gato</span>
                                    </RadioLabel>
                                </StyledRadio>
                            </AnimalType>
                            {ValidPet.touched.petType && ValidPet.errors.petType ? (
                                <ErrorText>{ ValidPet.errors.petType }</ErrorText>
                            ): null}
        
                            <InputLabel>
                                <DnaIcon />
                                <span>Raça</span>
                            </InputLabel>
                            <StyledInput 
                                type="text" 
                                placeholder="Raça"
                                name="breed"
                                onChange={ValidPet.handleChange}
                                onBlur={ValidPet.handleBlur}
                                value={ValidPet.values.breed}
                                disabled={disableButton}
                            />
                            {ValidPet.touched.breed && ValidPet.errors.breed ? (
                                <ErrorText>{ ValidPet.errors.breed }</ErrorText>
                            ): null}
        
                            <InputLabel>
                                <CalendarIcon />
                                <span>Nascimento <span>(Aproximado)</span> </span>
                            </InputLabel>
                            <StyledInput 
                                type="date"
                                name="birth"
                                onChange={ValidPet.handleChange}
                                value={ValidPet.values.birth}
                                disabled={disableButton}
                            />
                            {ValidPet.touched.birth && ValidPet.errors.birth ? (
                                <ErrorText>{ ValidPet.errors.birth }</ErrorText>
                            ): null}
                        </FormSection>  
                    </FormArea>

                    {modalTitle === 'Remover' ? <WarningText>Tem certeza que deseja remover esse pet?</WarningText> : ''}
                
                    <ButtonArea>
                        <Button type='button' onClick={props.onClose} variant="SECONDARY" icon={ <RoundArrowIcon/> } text="Voltar" height="40px" />
                        <Button type="submit" variant={actionButtonVariant} icon={buttonIcon} text={modalTitle} height="40px" />
                    </ButtonArea>
                </ModalContent>
            </ModalContainer>
        </Modal>
    )
}

export default PetModal