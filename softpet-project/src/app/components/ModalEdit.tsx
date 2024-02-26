import React from "react";
import styles from "../../styles/petlist.module.css";
import CloseCadastro from './icons/CloseCadastro.svg'
import PetEdit from './icons/PetEdit.svg';


interface EditProps {
    AbrirModal: boolean
    setAbrirModal: (aberto: boolean) => boolean | void;
    children: React.ReactNode;
}
const ModalEdit: React.FC<EditProps> = ({ AbrirModal, setAbrirModal, children }) => {
    return (
        <div className={styles.containerPet} style={{ display: AbrirModal ? 'block' : 'none' }}>
            <header className={styles.headerEditPet}>
                <div className={styles.EditIcon_Container}>

                    <span className={styles.EditIcon}>

                        <PetEdit />
                    
                    </span>


                    <h1>Editar</h1>

                </div>
                <span
                    
                    onClick={() => setAbrirModal(false)} style={{ cursor: "pointer" }} >
                    <CloseCadastro />
                </span>
            </header>
            <div className={styles.EditCadastro}>
                {children}
              
            </div>

        </div>
    );
}
export default ModalEdit