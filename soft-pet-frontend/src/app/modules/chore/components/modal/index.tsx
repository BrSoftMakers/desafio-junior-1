import { CalendarIcon, CloseIcon, DnaIcon, DogTagIcon, OwnerIcon, PhoneIcon, RoundArrowIcon } from "@icons/index"
import { ButtonArea, CloseButton, FormArea, HeaderIcon, Modal, ModalContainer, ModalContent, ModalHeader, ModalTitle, TitleArea, WarningText } from "./styles/modal-styles"
import { AnimalType, ErrorText, FormSection, InputLabel, RadioLabel, StyledInput, StyledRadio } from "./styles/form-style"
import { Button } from "@components/index"
import { Pet } from "../../models/pet";
import { useFormik } from "formik";
import formSchema from "../../validation/form-validation";
import { numberMask } from "../../utils/numberMask";
import React from "react";
import Input from "../InputLabel";
import OperationFunction from "./utils/modalOperations";
import formatInputValues from "./utils/formatInputValues";
import modalConfig from "./utils/modaConfig";
import { Bounce, toast } from "react-toastify";

type ModalType = 'Create' | 'Delete' | 'Edit'
interface ModalInterface {
    isOpen: boolean;
    modalType: ModalType;
    petData?: Pet | null

    onClose?: () => void;
    onOperationSuccess?: () => void;
}

const PetModal = ({ ...props }: ModalInterface) => {
    const operation = OperationFunction[props.modalType];
    const petId = props.petData?.id || null;
    const config = modalConfig[props.modalType]

    if(!config) {return null}

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
        onSubmit: async (values) => {
            const date = new Date(values.birth)
            
            const pet = {
                ...values,
                birth: date,
                id: petId
            }

            await operation && operation(pet)

            props.onOperationSuccess && props.onOperationSuccess()

            toast.success(config.notifyText, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            })
        },
        
    })

    React.useEffect(() => {
        if(config.title !== 'Cadastrar' && props.petData) {
            const formatedValues = formatInputValues(props.petData) 
            ValidPet.setValues(formatedValues)
        }

    }, [props.modalType, props.petData])

    return (
        <Modal isOpen={props.isOpen} >
            <ModalContainer isOpen={props.isOpen}>
                <ModalHeader>
                    <TitleArea>
                        <HeaderIcon>
                            {config.icon}
                        </HeaderIcon>
        
                        <ModalTitle>
                            {config.title}
                        </ModalTitle>
                    </TitleArea>
                    
                    <CloseButton onClick={props.onClose}>
                        <CloseIcon />
                    </CloseButton>
                </ModalHeader>
    
                <ModalContent onSubmit={ValidPet.handleSubmit}>
                    <FormArea>
                        <FormSection>
                            <Input 
                                icon={<DogTagIcon />}
                                type="text"
                                label="Name"
                                name="name"
                                placeholder="Nome Sobrenome"
                                onChange={ValidPet.handleChange}
                                onBlur={ValidPet.handleBlur}
                                value={ValidPet.values.name}
                                disable={config.disableButton}
                            />
                            {ValidPet.touched.name && ValidPet.errors.name ? (
                                <ErrorText>{ ValidPet.errors.name }</ErrorText>
                            ): null}
        
                            <Input 
                                icon={<OwnerIcon />}
                                type="text"
                                label="Dono"
                                name="ownerName"
                                placeholder="Nome Sobrenome"
                                onChange={ValidPet.handleChange}
                                onBlur={ValidPet.handleBlur}
                                value={ValidPet.values.ownerName}
                                disable={config.disableButton}
                            />
                            {ValidPet.touched.ownerName && ValidPet.errors.ownerName ? (
                                <ErrorText>{ ValidPet.errors.ownerName }</ErrorText>
                            ): null}
        
                            <Input 
                                icon={<PhoneIcon />}
                                type="text"
                                label="Telefone"
                                name="ownerPhone"
                                placeholder="(00) 00000-0000"
                                maxLength={15}
                                onChange={(e) => {
                                    const numberMasked = numberMask(e.target.value)
                                    ValidPet.setFieldValue(
                                        "ownerPhone",
                                        numberMasked
                                    )
                                }}
                                onBlur={ValidPet.handleBlur}
                                value={ValidPet.values.ownerPhone}
                                disable={config.disableButton}
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
                                            disabled={config.disableButton}
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
                                            disabled={config.disableButton}
                                        />
                                        <span>Gato</span>
                                    </RadioLabel>
                                </StyledRadio>
                            </AnimalType>
                            {ValidPet.touched.petType && ValidPet.errors.petType ? (
                                <ErrorText>{ ValidPet.errors.petType }</ErrorText>
                            ): null}

                            <Input 
                                icon={<DnaIcon />}
                                type="text"
                                label="Raça"
                                name="breed"
                                placeholder="Raça"
                                onChange={ValidPet.handleChange}
                                onBlur={ValidPet.handleBlur}
                                value={ValidPet.values.breed}
                                disable={config.disableButton}
                            />
                            {ValidPet.touched.breed && ValidPet.errors.breed ? (
                                <ErrorText>{ ValidPet.errors.breed }</ErrorText>
                            ): null}

                            <Input 
                                icon={<CalendarIcon />}
                                type="date"
                                label='Nascimento'
                                name="birth"
                                onChange={ValidPet.handleChange}
                                onBlur={ValidPet.handleBlur}
                                value={ValidPet.values.birth}
                                disable={config.disableButton}
                            />
                            {ValidPet.touched.birth && ValidPet.errors.birth ? (
                                <ErrorText>{ ValidPet.errors.birth }</ErrorText>
                            ): null}
                        </FormSection>  
                    </FormArea>

                    {config.title === 'Remover' ? <WarningText>Tem certeza que deseja remover esse pet?</WarningText> : ''}
                
                    <ButtonArea>
                        <Button type='button' onClick={props.onClose} variant="SECONDARY" icon={ <RoundArrowIcon/> } text="Voltar" height="40px" />
                        <Button type="submit" variant={config.actionButtonVariant} icon={config.buttonIcon} text={config.title} height="40px" />
                    </ButtonArea>
                </ModalContent>
            </ModalContainer>
        </Modal>
    )
}

export default PetModal