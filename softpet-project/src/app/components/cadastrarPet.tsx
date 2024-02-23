import styles from "../../styles/cadastrarpet.module.css";
import CadastroModel from "./cadastroModel";
import React, { FormEventHandler, useState } from 'react';
import PetIcon from './icons/PetIcon';
import PetDonoIcon from './icons/PetDonoIcon';
import PetNameIcon from './icons/PetNameIcon';
import CadastroIcon from './icons/CadastroIcon.svg';
import VoltarCadastroIcon from './icons/VoltarCadastroIcon.svg'
import SelectAnimalIcon from './icons/SelectAnimalIcon.svg';
import TelefoneIcon from './icons/TelefoneIcon.svg'
import DataIcon from './icons/DataIcon.svg';

export default function CadastrarPet({ }) {

    const [abrirCadastro, setAbrirCadastro] = useState<boolean>(false);
    const [newPetValue, setNewPetValue] = useState<string>('')

    const handleSubmitPets: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log("nome: ",newPetValue)
    }
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
                            value={newPetValue}
                            onChange={e => setNewPetValue(e.target.value)}
                            placeholder="Nome Sobrenome" type="text" />

                    </div>
                    <div className={styles.infoCadastro_Animal}>

                        <span><SelectAnimalIcon /><label>Animal</label></span>
                        <div className={styles.ContainerSelectAnimal}>
                            <span className={styles.selectAnimal}>
                                <input type="radio" name="grupo1" id="opcao1" />
                                <label htmlFor="opcao1">Cachorro</label>
                            </span>
                            <span className={styles.selectAnimal}>
                                <input type="radio" name="grupo1" id="opcao2" />
                                <label htmlFor="opcao2">Gato</label>
                            </span>
                        </div>
                    </div>
                    <div className={styles.infoCadastro_Dono}>
                        <span> <PetDonoIcon /><label>Dono</label></span>
                        <input placeholder="Nome Sobrenome" type="text" />
                    </div>
                    <div className={styles.infoCadastro_Raça}>
                        <span><SelectAnimalIcon /><label>Raça</label></span>
                        <input placeholder="Raça" type="text" />
                    </div>
                    <div className={styles.infoCadastro_Telefone}>
                        <span><TelefoneIcon /><label>Telefone</label></span>
                        <input placeholder="(00) 0 0000-0000" type="tel" name="" id="" />
                    </div>
                    <div className={styles.infoCadastro_Nascimento}>
                        <span><DataIcon /><label>Nascimento</label></span>
                        <input placeholder="22/08/2020" type="datetime" name="" id="" />
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
