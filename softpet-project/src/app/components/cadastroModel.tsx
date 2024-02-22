import React from "react";
import styles from "../../styles/cadastrarpet.module.css";
import CadastroIcon from '../components/icons/CadastroIcon.svg';
import CloseCadastro from '../components/icons/CloseCadastro.svg'


interface CadastroProps {
    abrirCadastro:boolean
    setAbrirCadastro:(aberto:boolean) => boolean | void;
    children:React.ReactNode;
}
const cadastroModel:React.FC<CadastroProps> = ({ abrirCadastro,setAbrirCadastro,children })=>{
    return (
        <div className={styles.containerCadastrarPet} style={{ display: abrirCadastro ? 'block' : 'none' }}>
            <header className={styles.headerCadastrarPet}>

                <div className={styles.cadastroIcon_Container}><span className={styles.cadastroIcon}>
                    <CadastroIcon style={{fontSize:25}}/></span><h1>Cadastrar</h1>
                    </div>
                <span onClick={()=> setAbrirCadastro(false)} style={{ cursor: "pointer" }} ><CloseCadastro style={{fontSize:14}}/></span>

            </header>
            <div className={styles.infoCadastro}>
             {children}
            </div>
            <footer>
                <div>
                    <button onClick={()=> setAbrirCadastro(false)}  className={styles.buttonVoltarCadastroPet}>Voltar</button>
                    <button type="submit" className={styles.buttonCadastrarPet}>
                        Cadastrar
                    </button>
                </div>
            </footer>
        </div>
    );
}
export default cadastroModel