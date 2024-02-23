import styles from "../../styles/cadastrarpet.module.css";
import CadastroModel from "./cadastroModel";
import PetIcon from './icons/PetIcon';
import PetDonoIcon from './icons/PetDonoIcon';
import PetNameIcon from './icons/PetNameIcon';
import CadastroIcon from './icons/CadastroIcon.svg';
import VoltarCadastroIcon from './icons/VoltarCadastroIcon.svg'
import SelectAnimalIcon from './icons/SelectAnimalIcon.svg';
import TelefoneIcon from './icons/TelefoneIcon.svg'
import DataIcon from './icons/DataIcon.svg';
import React, { FormEventHandler, useState } from 'react';
import { IPets } from '../../../types/pets';
import { addPets } from "../../../api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

export default function CadastrarPet({ }) {
    const router = useRouter()
    const [abrirCadastro, setAbrirCadastro] = useState<boolean>(false);
    const [newPetValue, setNewPetValue] = useState<IPets>({
        id: "",
        nome: "",
        animal: "",
        dono: "",
        raca: "",
        telefone: "",
        nascimento: ""
    });

    const handleSubmitPets: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await addPets(newPetValue);
        setNewPetValue({
            id:uuidv4(),
            nome: "",
            animal: "",
            dono: "",
            raca: "",
            telefone: "",
            nascimento: ""
        });
        setAbrirCadastro(false) 
        console.log(newPetValue)
        router.refresh()

    }
    const handleAnimalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPetValue({ ...newPetValue, animal: e.target.value });
    };
    return (
        <div className={styles.cadastrarPetForm}>

            <button className={styles.buttonAbrirCadastro} onClick={() => setAbrirCadastro(true)}>
                <CadastroIcon />
                Cadastrar
            </button>

            <CadastroModel abrirCadastro={abrirCadastro} setAbrirCadastro={setAbrirCadastro}>

                <form onSubmit={handleSubmitPets} className={styles.PetForm}>
                    <div className={styles.infoCadastro_Nome}>

                        <span> <PetNameIcon /><label>Nome</label></span>
                        <input
                            value={newPetValue.nome}
                            onChange={e => setNewPetValue({ ...newPetValue, nome: e.target.value })}
                            placeholder="Nome Sobrenome" type="text" />

                    </div>
                    <div className={styles.infoCadastro_Animal}>

                        <span><SelectAnimalIcon /><label>Animal</label></span>
                        <div className={styles.ContainerSelectAnimal}>
                            <span className={styles.selectAnimal}>
                                <input
                                    onChange={handleAnimalChange}
                                    type="radio" id="opcao1"
                                    name="animal"
                                    value="cachorro"
                                    checked={newPetValue.animal === "cachorro"} />
                                <label htmlFor="opcao1">Cachorro</label>
                            </span>
                            <span className={styles.selectAnimal}>
                                <input
                                    onChange={handleAnimalChange} 
                                    type="radio" id="opcao2"
                                    name="animal"
                                    value="gato"
                                    checked={newPetValue.animal === "gato"} />
                                <label htmlFor="opcao2">Gato</label>
                            </span>
                        </div>
                    </div>
                    <div className={styles.infoCadastro_Dono}>
                        <span> <PetDonoIcon /><label>Dono</label></span>
                        <input
                            value={newPetValue.dono}
                            onChange={e => setNewPetValue({ ...newPetValue, dono: e.target.value })}
                            placeholder="Nome Sobrenome" type="text" />
                    </div>
                    <div className={styles.infoCadastro_raca}>
                        <span><SelectAnimalIcon /><label>Raça</label></span>
                        <input
                            value={newPetValue.raca}
                            onChange={e => setNewPetValue({ ...newPetValue, raca: e.target.value })}
                            placeholder="Raça" type="text" />
                    </div>
                    <div className={styles.infoCadastro_Telefone}>
                        <span><TelefoneIcon /><label>Telefone</label></span>
                        <input
                            value={newPetValue.telefone}
                            onChange={e => setNewPetValue({ ...newPetValue, telefone: e.target.value })}
                            placeholder="(00) 0 0000-0000" type="tel" name="" id="" />
                    </div>
                    <div className={styles.infoCadastro_Nascimento}>
                        <span><DataIcon /><label>Nascimento</label></span>
                        <input
                            value={newPetValue.nascimento}
                            onChange={e => setNewPetValue({ ...newPetValue, nascimento: e.target.value })}
                            placeholder="22/08/2020" type="datetime" name="" id="" />
                    </div>
                    <footer className={styles.footerCadastroPet}>
                        <button onClick={() => setAbrirCadastro(false)} className={styles.buttonVoltarCadastroPet}>
                            <span><VoltarCadastroIcon /><span style={{ paddingLeft: 5 }}>Voltar</span></span>
                        </button>

                        <button type="submit" className={styles.buttonCadastrarPet}>
                            <span><CadastroIcon />
                                <span style={{ paddingLeft: 5 }}>Cadastrar</span>
                            </span>

                        </button>
                    </footer>

                </form>

            </CadastroModel>
        </div>
    );
}
