import React from "react";
import styles from "../../styles/petlist.module.css";
import CadastroIcon from './icons/CadastroIcon.svg';
import CloseCadastro from './icons/CloseCadastro.svg'



interface EditProps {
    AbrirModal: boolean
    setAbrirModal: (aberto: boolean) => boolean | void;
    children: React.ReactNode;
}
const ModalEdit: React.FC<EditProps> = ({ AbrirModal, setAbrirModal, children }) => {
    return (
        <div className={styles.containerPet} style={{ display: AbrirModal ? 'block' : 'none' }}>
            <header className={styles.headerCadastrarPet}>
                <div className={styles.cadastroIcon_Container}>

                    <span className={styles.cadastroIcon}>
                        <CadastroIcon />
                    </span>


                    <h1>Editar</h1>

                </div>
                <span
                    onClick={() => setAbrirModal(false)} style={{ cursor: "pointer" }} >
                    <CloseCadastro />
                </span>
            </header>
            <div className={styles.infoCadastro}>
                {children}
              
            </div>

        </div>
    );
}
export default ModalEdit