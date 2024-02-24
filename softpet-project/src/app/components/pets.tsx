
import React, { FormEventHandler, useState } from 'react';
import styles from '../../styles/petlist.module.css';
import CachorroIcon from './icons/CachorroIcon.svg';
import GatoIcon from './icons/GatoIcon.svg';
import PetDonoIcon from './icons/PetDonoIcon.svg';
import PetNameIcon from './icons/PetNameIcon.svg';
import PetArrowInfo from './icons/PetArrowInfo';
import TelefoneIcon from './icons/TelefoneIcon.svg';
import PetRaca from './icons/SelectAnimalIcon.svg';
import PetNascimento from './icons/DataIcon.svg';
import PetEdit from './icons/PetEdit.svg';
import PetEditContainer from './icons/PetEditContainer.svg'
import PetRemove from './icons/PetRemove.svg'
import SelectAnimalIcon from './icons/SelectAnimalIcon.svg';
import { IPets } from '../../../types/pets';
import ModalEdit from './ModalEdit';
import ModalRemove from './ModalRemove';
import DataIcon from './icons/DataIcon.svg';
import VoltarIcon from './icons/VoltarCadastroIcon.svg'
import { useRouter } from 'next/navigation';
import { editPets, removePets } from '../../../api';


interface PetsProps {
    pet: IPets;
    onClick: () => void;
    selectedPet?: IPets;
    isClicked: boolean;
}

const Pets: React.FC<PetsProps> = ({ pet, onClick, selectedPet, isClicked }) => {

    const router = useRouter()
    const [openModalEdit, setModalEdit] = useState<boolean>(false)
    const [petEdit, setPetEdit] = useState<IPets>({ ...pet });
    const [openModalRemove, setModalRemove] = useState<boolean>(false)
    const [petRemove,setPetRemove] = useState<IPets>({ ...pet });

    const handleSubmitRemovePets = async (id:string) => {
        await removePets(id)
        setModalRemove(false);
    };
    
    const handleSubmitEditPets: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const updatedPet: IPets = {
            ...pet,
            nome: petEdit.nome,
            animal: petEdit.animal,
            dono: petEdit.dono,
            raca: petEdit.raca,
            telefone: petEdit.telefone,
            nascimento: petEdit.nascimento
        };
        await editPets(updatedPet)
        setPetEdit(updatedPet);
        console.log(petEdit)
        router.refresh()

    }
    const animalIcon = pet.animal === 'cachorro' ? <CachorroIcon /> : <GatoIcon />

    return (
        <div>
            <div className={styles.PetContainer}>
                <div className={`${styles.Pet} ${isClicked ? styles.clicked : ''}`} onClick={onClick}>
                    <span className={styles.PetIcon}>
                        {animalIcon}
                    </span>
                    <div key={pet.id} className={styles.ContainerPetInfo}>
                        <span className={styles.PetInfo}><PetNameIcon /> <p>{pet.nome}</p></span>
                        <span className={styles.PetInfo}><PetDonoIcon /> <p>{pet.dono}</p></span>
                    </div>
                    <span className={styles.PetArrowInfo}> <PetArrowInfo /> </span>
                </div>
                {selectedPet && selectedPet.id === pet.id && (
                    <div className={styles.PetInfoPopup}>
                        <div className={styles.PetInfoPopup_info_container}>
                            <div className={styles.PetInfoPopup_info}>
                                <span><PetRaca /><p>Raça: {pet.raca}</p></span>
                                <span><TelefoneIcon /><p>Telefone: {pet.telefone}</p></span>
                                <span><PetNascimento /><p>Idade: {pet.nascimento}</p></span>
                            </div>

                            <div className={styles.petInfoPopup_buttons}>

                                <button
                                    onClick={() => setModalEdit(true)}
                                    className={styles.PetInfoPopup_info_edit}><PetEditContainer />Editar</button>


                                <button
                                onClick={() => setModalRemove(true)}
                                className={styles.PetInfoPopup_info_remove}><PetRemove />Remover</button>

                            </div>

                        </div>
                    </div>

                )}

            </div>
            <ModalEdit AbrirModal={openModalEdit} setAbrirModal={setModalEdit}>

                <form onSubmit={handleSubmitEditPets} className={styles.PetForm}>
                    <div className={styles.infoCadastro_Nome}>

                        <span> <PetNameIcon /><label>Nome</label></span>
                        <input
                            value={petEdit.nome}
                            onChange={(e) => setPetEdit({ ...petEdit, nome: e.target.value })}
                            placeholder="Nome Sobrenome"
                            type="text" />

                    </div>
                    <div className={styles.infoCadastro_Animal}>

                        <span><SelectAnimalIcon /><label>Animal</label></span>
                        <div className={styles.ContainerSelectAnimal}>
                            <span className={`${styles.selectAnimal} ${petEdit.animal === "cachorro" ? styles.checked : ''}`}>
                                <span className={styles.radioOn}></span>
                                <input
                                    onChange={(e) => {
                                        console.log('Input de rádio clicado:', e.target.value);
                                        setPetEdit({ ...petEdit, animal: e.target.value });
                                        console.log('Estado atualizado de petEdit:', petEdit);
                                    }}
                                    type="radio" id="opcao1"
                                    name="animal"
                                    value="cachorro"
                                    checked={petEdit.animal === "cachorro"} />
                                <label htmlFor="opcao1">Cachorro</label>
                            </span>
                            <span className={`${styles.selectAnimal} ${petEdit.animal === "gato" ? styles.checked : ''}`}>
                                <span className={styles.radioOn}></span>
                                <input
                                    onChange={(e) => {
                                        console.log('Input de rádio clicado:', e.target.value);
                                        setPetEdit({ ...petEdit, animal: e.target.value });
                                        console.log('Estado atualizado de petEdit:', petEdit);
                                    }}
                                    type="radio" id="opcao2"
                                    name="animal"
                                    value="gato"
                                    checked={petEdit.animal === "gato"} />
                                <label htmlFor="opcao2">Gato</label>
                            </span>
                        </div>
                    </div>
                    <div className={styles.infoCadastro_Dono}>
                        <span> <PetDonoIcon /><label>Dono</label></span>
                        <input
                            value={petEdit.dono}
                            onChange={(e) => setPetEdit({ ...petEdit, dono: e.target.value })}
                            placeholder="Nome Sobrenome" type="text" />
                    </div>
                    <div className={styles.infoCadastro_raca}>
                        <span><SelectAnimalIcon /><label>Raça</label></span>
                        <input
                            value={petEdit.raca}
                            onChange={(e) => setPetEdit({ ...petEdit, raca: e.target.value })} placeholder="Raça" type="text" />
                    </div>
                    <div className={styles.infoCadastro_Telefone}>
                        <span><TelefoneIcon /><label>Telefone</label></span>
                        <input
                            value={petEdit.telefone}
                            onChange={(e) => setPetEdit({ ...petEdit, telefone: e.target.value })}
                            placeholder="(00) 0 0000-0000" type="tel" name="" id="" />
                    </div>
                    <div className={styles.infoCadastro_Nascimento}>
                        <span><DataIcon /><label>Nascimento</label></span>
                        <input
                            value={petEdit.nascimento}
                            onChange={(e) => setPetEdit({ ...petEdit, nascimento: e.target.value })}
                            placeholder="22/08/2020" type="datetime" name="" id="" />
                    </div>
                    <footer className={styles.footerCadastroPet}>

                        <button onClick={() => setModalEdit(false)}
                            className={styles.buttonVoltarCadastroPet}>
                            <span><VoltarIcon /><span style={{ paddingLeft: 5 }}>Voltar</span></span>
                        </button>

                        <button onClick={() => setModalEdit(false)} type="submit" className={styles.buttonEditarPet}>
                            <span>
                                <PetEditContainer />
                                <span style={{ paddingLeft: 5 }}>Salvar</span>
                            </span>

                        </button>

                    </footer>

                </form>

            </ModalEdit>

            <ModalRemove AbrirModal={openModalRemove} setAbrirModal={setModalRemove} >

                <div>

                <form className={styles.PetForm}>
                    <div className={styles.infoCadastro_Nome}>

                        <span> <PetNameIcon /><label>Nome</label></span>
                        <input
                            value={petRemove.nome}
                            onChange={(e) => setPetRemove({ ...petRemove, nome: e.target.value })}
                            placeholder="Nome Sobrenome"
                            type="text" />

                    </div>
                    <div className={styles.infoCadastro_Animal}>

                        <span><SelectAnimalIcon /><label>Animal</label></span>
                        <div className={styles.ContainerSelectAnimal}>
                            <span className={`${styles.selectAnimal} ${petRemove.animal === "cachorro" ? styles.checked : ''}`}>
                                <span className={styles.radioOn}></span>
                                <input
                                    onChange={(e) => {
                                        console.log('Input de rádio clicado:', e.target.value);
                                        setPetRemove({ ...petRemove, animal: e.target.value });
                                        console.log('Estado atualizado de petRemove:', petRemove);
                                    }}
                                    type="radio" id="opcao1"
                                    name="animal"
                                    value="cachorro"
                                    checked={petRemove.animal === "cachorro"} />
                                <label htmlFor="opcao1">Cachorro</label>
                            </span>
                            <span className={`${styles.selectAnimal} ${petRemove.animal === "gato" ? styles.checked : ''}`}>
                                <span className={styles.radioOn}></span>
                                <input
                                    onChange={(e) => {
                                        console.log('Input de rádio clicado:', e.target.value);
                                        setPetRemove({ ...petRemove, animal: e.target.value });
                                        console.log('Estado atualizado de petRemove:', petRemove);
                                    }}
                                    type="radio" id="opcao2"
                                    name="animal"
                                    value="gato"
                                    checked={petRemove.animal === "gato"} />
                                <label htmlFor="opcao2">Gato</label>
                            </span>
                        </div>
                    </div>
                    <div className={styles.infoCadastro_Dono}>
                        <span> <PetDonoIcon /><label>Dono</label></span>
                        <input
                            value={petRemove.dono}
                            onChange={(e) => setPetRemove({ ...petRemove, dono: e.target.value })}
                            placeholder="Nome Sobrenome" type="text" />
                    </div>
                    <div className={styles.infoCadastro_raca}>
                        <span><SelectAnimalIcon /><label>Raça</label></span>
                        <input
                            value={petRemove.raca}
                            onChange={(e) => setPetRemove({ ...petRemove, raca: e.target.value })} placeholder="Raça" type="text" />
                    </div>
                    <div className={styles.infoCadastro_Telefone}>
                        <span><TelefoneIcon /><label>Telefone</label></span>
                        <input
                            value={petRemove.telefone}
                            onChange={(e) => setPetRemove({ ...petRemove, telefone: e.target.value })}
                            placeholder="(00) 0 0000-0000" type="tel" name="" id="" />
                    </div>
                    <div className={styles.infoCadastro_Nascimento}>
                        <span><DataIcon /><label>Nascimento</label></span>
                        <input
                            value={petRemove.nascimento}
                            onChange={(e) => setPetRemove({ ...petRemove, nascimento: e.target.value })}
                            placeholder="22/08/2020" type="datetime" name="" id="" />
                    </div>
                    <footer className={styles.footerCadastroPet}>

                        <button onClick={() => setModalRemove(false)}
                            className={styles.buttonVoltarCadastroPet}>
                            <span><VoltarIcon /><span style={{ paddingLeft: 5 }}>Voltar</span></span>
                        </button>

                        <button onClick={() => handleSubmitRemovePets(pet.id)} type="submit" className={styles.buttonEditarPet}>
                            <span>
                                
                                Remover
                            </span>

                        </button>

                    </footer>

                </form>

                </div>

            </ModalRemove>
        </div>

    );
};


export default Pets