import React from 'react';
import ReactModal from 'react-modal';

import './styles.css'

import { MdClose } from 'react-icons/md';

import {useAlert} from '../../providers/alert';

function Alert() {

    const {alertVisible, setAlertVisible, messageTitle, messageText, buttons} = useAlert();

    const handleCloseModal = () =>{
        setAlertVisible(false);
    }

    return (
        <ReactModal 
            ariaHideApp={false}
            className="modalContent" 
            overlayClassName="modalOverlay"
            isOpen={alertVisible}
            contentLabel="Example Modal"
        >
            <div className="modalHeader">
                <h2>{messageTitle || "Alerta"}</h2>
                <a href="#" onClick={()=> {handleCloseModal()}}><MdClose size={20}/></a>
            </div>

            <div className="modalBody">
                <p>{messageText}</p>
            </div>

            {buttons?
                <div className="modalFooter">
                    {buttons}   
                </div>
                : ""
            }

            
        </ReactModal>
    )
}

export default Alert;