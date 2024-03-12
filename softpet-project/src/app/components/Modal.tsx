import React from "react";
import styles from "../../styles/cadastrarpet.module.css";
import CadastroIcon from './icons/CadastroIcon.svg';
import CloseCadastro from './icons/CloseCadastro.svg';



interface CadastroProps {
    AbrirModal: boolean
    setAbrirModal: (aberto: boolean) => boolean | void;
    children: React.ReactNode;
}
const Modal: React.FC<CadastroProps> = ({ AbrirModal, setAbrirModal, children }) => {
    return (
        <div className={styles.containerCadastrarPet} style={{ display: AbrirModal ? 'block' : 'none' }}>
            <header className={styles.headerCadastrarPet}>
                <div className={styles.cadastroIcon_Container}>
                    
                    <span className={styles.cadastroIcon}>
                        <CadastroIcon style={{ fontSize: 30 }} />
                    </span>
                   

                    <h1>Cadastrar</h1>
                     
                </div>
                <span 
                    onClick={() => setAbrirModal(false)} style={{ cursor: "pointer" }} >
                    <CloseCadastro style={{ fontSize: 14 }} />
                    </span>
            </header>
            <div className={styles.infoCadastro}>
                {children}
            </div>

        </div>
    );
}
export default Modal