import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';

import { MdClose, MdDelete, MdEdit } from 'react-icons/md';
import userImgDefault from '../../assets/default-user-image.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Alert from '../../components/Alert';
import {useAlert} from '../../providers/alert';

import Loading from '../../components/Loading';
import {useLoading} from '../../providers/loading';

import './styles.css';
import api from '../../services/api';

function Modal ({visible, setVisible, handleDelete, attPets, setAttPets, ...props}) {

    const {showAlert} = useAlert();
    const {setLoadingVisible} = useLoading();

    const [NAME, setName] = useState('');
    const [DATA_NASC, setDataNasc] = useState('');
    const [TYPE, setType] = useState('');
    const [RACA, setRaca] = useState('');
    const [IMAGE, setImage] = useState('');
    const [OWNER, setOwner] = useState('');
    const [TELEPHONE, setTelephone] = useState('');

    const [edit, setEdit] = useState(false);

    const setDefaultInfos = () => {
        const {NAME, DATA_NASC, TYPE, RACA, IMAGE, OWNER, TELEPHONE} = props.pet;
        setName(NAME);
        setDataNasc(DATA_NASC.substring(0, 10));
        setType(TYPE);
        setRaca(RACA);
        setImage(IMAGE);
        setOwner(OWNER);
        setTelephone(TELEPHONE);
        setEdit(false);
    }

    useEffect(()=>{
        if(visible){
            setDefaultInfos();
        } else{
            setEdit(true);
        }

    },[visible]);

    const handleConfirmEdit = async e =>{
        e.preventDefault();
        setLoadingVisible(true);
        
        const data = {
            IDPET: props.pet.IDPET,
            NAME,
            DATA_NASC,
            TYPE,
            RACA,
            IMAGE,
            OWNER,
            TELEPHONE
        }

        const response = await api.put('/pet', data);
        setLoadingVisible(false);
        showAlert('SUCESSO', 'Informações sobre o pet alteradas com sucesso!')
        setEdit(!edit);
    }
    
    return (
        <>    
        <ReactModal 
            ariaHideApp={false}
            className="petDetailContainer" 
            overlayClassName="modalOverlay"
            shouldCloseOnOverlayClick={true}
            isOpen={visible}
            contentLabel="Example Modal"
        >   
            <div className="imgContent">
                <img src={IMAGE} alt="petImg" onError={(e)=>{e.target.onerror = null; e.target.src=userImgDefault}} alt="pet"/>
            </div>

            <div className="petDetailContent">   
                <div className="petDetailHeader">
                <h2>INFORMAÇÕES</h2>
                    <button href="#"onClick={()=> {setVisible(false); setAttPets(!attPets)}}>
                        <MdClose size={20}/>
                    </button>
                </div>  
                
                <form onSubmit={ e => {handleConfirmEdit(e)}}>
                    
                    <div className="inputGroup">
                        <Input 
                            required
                            label="CACHORRO" 
                            type="radio" 
                            name="type" 
                            value="CACHORRO"
                            checked={TYPE == 'CACHORRO' ? true : false}
                            disabled={!edit}
                            onChange={e=>{setType(e.target.value)}} 
                        />

                        <Input 
                            required
                            label="GATO" 
                            type="radio"
                            name="type" 
                            value="GATO"
                            checked={TYPE == 'GATO' ? true : false}
                            disabled={!edit}
                            onChange={e=>{setType(e.target.value)}} 
                        />
                    </div>
            
                    <Input 
                        required
                        label="Nome do Pet" 
                        type="text" 
                        placeholder="Exemplo: Floquinho" 
                        value={NAME}
                        disabled={!edit}
                        onChange={e=>{setName(e.target.value)}} 
                    />

                    <Input 
                        required
                        label="Data de Nascimento" 
                        type="date" 
                        placeholder="Exemplo: 01/03/2010" 
                        value={DATA_NASC}
                        disabled={!edit}
                        onChange={e=>{setDataNasc(e.target.value)}} 
                    />

                    <Input 
                        required
                        label="RAÇA" 
                        type="text" 
                        placeholder="Exemplo: BULLDOG" 
                        value={RACA}
                        disabled={!edit}
                        onChange={e=>{setRaca(e.target.value)}} 
                    />

                    <Input 
                        required
                        label="URL DA FOTO DO PET" 
                        type="text" 
                        placeholder="Exemplo: https://image.com/imagem.png" 
                        value={IMAGE}
                        disabled={!edit}
                        onChange={e=>{setImage(e.target.value)}} 
                    />

                    <Input 
                        required
                        label="DONO" 
                        type="text" 
                        placeholder="Exemplo: ROBERTO AUGUSTO" 
                        value={OWNER}
                        disabled={!edit}
                        onChange={e=>{setOwner(e.target.value)}} 
                    />

                    <Input 
                        required
                        label="TELEFONE" 
                        type="tel" 
                        pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
                        placeholder="Exemplo: 01 98811-8811" 
                        value={TELEPHONE}
                        disabled={!edit}
                        onChange={e=>{setTelephone(e.target.value)}} 
                    />

                    {edit?
                        <div className="petDetailOptions">
                            <Button type="button" style="outlinedButton" onClick={ e => {setDefaultInfos(e)}}>
                                CANCELAR
                            </Button>
                            <Button type="submit">
                                CONFIRMAR
                            </Button>                  
                        </div> 
                    : "" }
                </form>    

                {edit? "" :
                    <div className="petDetailOptions">
                    <Button type="button" style="deleteButton" onClick={()=>{handleDelete(props.pet)}} >
                        <MdDelete size={24} /> Deletar
                    </Button>

                    <Button type="button" onClick={() =>{setEdit(!edit)}}>
                        <MdEdit size={24}/> Editar
                    </Button>
                    </div>
                }            
            </div>
            <Alert />
            <Loading />
        </ReactModal> 
        </>
    )
}

export default Modal;