'use client'
import styles from "../styles/cadastrarpet.module.css";
import React, { useState } from 'react';



export default function CadastrarPet({ toggleButtonState,createPet }) {
    const [formData, setFormData] = useState({
        nome: 'roberto',
        animal: 'cachorro',
        dono: 'ze miguel',
        raca: 'pitbull',
        telefone: '548548',
        nascimento: '20/01/1999',
    });
    const handleCreatePet = (formData) => {
        const parsedCreatePet = JSON.parse(createPet);
        parsedCreatePet(formData);
      };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createPet(formData);
    };
    return (
        <div className={styles.containerCadastrarPet}>
            <header className={styles.headerCadastrarPet}>

                <h1>Cadastrar</h1>
                <span style={{ cursor: "pointer" }} onClick={toggleButtonState}>X</span>

            </header>
            <div className={styles.infoCadastro}>
                <form onSubmit={handleCreatePet}>
                <div className={styles.infoCadastro_Nome}>
                    
                    <span>Nome</span>
                    <input type="text" />
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
                    <input type="text" />
                </div>
                <div>
                    <span>Raça</span>
                    <input type="text" />
                </div>
                <div>
                    <span>Telefone</span>
                    <input type="tel" name="" id="" />
                </div>
                <div>
                    <span>Nascimento</span>
                    <input type="datetime" name="" id="" />
                </div>
                </form>
            </div>
            <footer>
                <div>
                    <button className={styles.buttonVoltarCadastroPet} onClick={toggleButtonState}>Voltar</button>
                    <button type="submit" className={styles.buttonCadastrarPet}>Cadastrar</button>
                </div>
            </footer>
        </div>
    );
}
