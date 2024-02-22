import styles from "../../styles/cadastrarpet.module.css";
import CadastroModel from "./cadastroModel";
import React, { useState } from 'react';

export default function CadastrarPet({}) {

    const [abrirCadastro, setAbrirCadastro] = useState<boolean>(false);
  
    return (
        <div>
            <button onClick={()=> setAbrirCadastro(true)}>Cadastrar</button>
           <CadastroModel abrirCadastro={abrirCadastro} setAbrirCadastro={setAbrirCadastro}>
           
            <form>
                <div className={styles.infoCadastro_Nome}>
                    <span>Nome</span>
                    <input placeholder="Nome Sobrenome" type="text" />
                </div>
                <div className={styles.infoCadastro_Animal}>

                    <span>Animal</span>
                    <input type="radio" name="grupo1" id="opcao1" />
                    <label htmlFor="opcao1">Cachorro</label>

                    <input type="radio" name="grupo1" id="opcao2" />
                    <label htmlFor="opcao2">Gato</label>

                </div>
                <div>
                    <span>Dono</span>
                    <input placeholder="Nome Sobrenome"  type="text" />
                </div>
                <div>
                    <span>Raça</span>
                    <input placeholder="Raça"  type="text" />
                </div>
                <div>
                    <span>Telefone</span>
                    <input placeholder="(00) 0 0000-0000"  type="tel" name="" id="" />
                </div>
                <div>
                    <span>Nascimento</span>
                    <input placeholder="22/08/2020"  type="datetime" name="" id="" />
                </div>
                </form>
            
           </CadastroModel>
        </div>
    );
}
