import React, {useState} from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Alert from '../../components/Alert';
import {useAlert} from '../../providers/alert';

import Loading from '../../components/Loading';
import {useLoading} from '../../providers/loading';

import Header from '../../components/Header';
import api from '../../services/api';
import './styles.css';

function NewPet() {

    const {showAlert} = useAlert();
    const {setLoadingVisible} = useLoading();

    const [NAME, setName] = useState('');
    const [DATA_NASC, setDataNasc] = useState('');
    const [TYPE, setType] = useState('');
    const [RACA, setRaca] = useState('');
    const [IMAGE, setImage] = useState('');
    const [OWNER, setOwner] = useState('');
    const [TELEPHONE, setTelephone] = useState('');

    const handleRegisterPet = async e => {  
        e.preventDefault();
        setLoadingVisible(true);
        const data = {
            NAME,
            DATA_NASC,
            TYPE,
            RACA,
            IMAGE,
            OWNER,
            TELEPHONE
        }

        try {
            const response = await api.post('/pet', data);
            showAlert('SUCESSO', 'PET CADASTRADO COM SUCESSO!');
        } catch (err) {
            showAlert(
                'ERRO!', 
                "Não foi possivel cadastrar o pet. Tente novamente mais tarde!"
            )
        }

        setLoadingVisible(false);
    }

    return (
        <> 
        <Loading />
        <Header />
        <div className="viewContent">
            
            <form onSubmit={ e => {handleRegisterPet(e)}}>
                
                <div className="inputGroup">
                    <Input 
                        required
                        label="CACHORRO" 
                        type="radio" 
                        name="type" 
                        value="CACHORRO"
                        onChange={e=>{setType(e.target.value)}} 
                    />

                    <Input 
                        required
                        label="GATO" 
                        type="radio"
                        name="type" 
                        value="GATO"
                        onChange={e=>{setType(e.target.value)}} 
                    />
                </div>
           
                <Input 
                    required
                    label="Nome do Pet" 
                    type="text" 
                    placeholder="Exemplo: Floquinho" 
                    value={NAME}
                    onChange={e=>{setName(e.target.value)}} 
                />

                <Input 
                    required
                    label="Data de Nascimento" 
                    type="date" 
                    placeholder="Exemplo: 01/03/2010" 
                    value={DATA_NASC}
                    onChange={e=>{setDataNasc(e.target.value)}} 
                />

                <Input 
                    required
                    label="RAÇA" 
                    type="text" 
                    placeholder="Exemplo: BULLDOG" 
                    value={RACA}
                    onChange={e=>{setRaca(e.target.value)}} 
                />

                <Input 
                    required
                    label="URL DA FOTO DO PET" 
                    type="text" 
                    placeholder="Exemplo: https://image.com/imagem.png" 
                    value={IMAGE}
                    onChange={e=>{setImage(e.target.value)}} 
                />

                <Input 
                    required
                    label="DONO" 
                    type="text" 
                    placeholder="Exemplo: ROBERTO AUGUSTO" 
                    value={OWNER}
                    onChange={e=>{setOwner(e.target.value)}} 
                />

                <Input 
                    required
                    label="TELEFONE" 
                    type="tel" 
                    pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
                    placeholder="Exemplo: 01 98811-8811" 
                    value={TELEPHONE}
                    onChange={e=>{setTelephone(e.target.value)}} 
                />

                <Button type="submit">Cadastrar</Button>
            </form>
        </div>

        <Alert />
        </>
    )
}

export default NewPet;
