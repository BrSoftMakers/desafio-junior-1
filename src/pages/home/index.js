import React, {useEffect, useState} from 'react';

import Alert from '../../components/Alert';
import {useAlert} from '../../providers/alert';

import Header from '../../components/Header';
import Button from '../../components/Button';
import ModalDetail from '../../components/ModalDetail';

import Loading from '../../components/Loading';
import {useLoading} from '../../providers/loading';

import noData from '../../assets/noData.svg';

import './styles.css';

import api from '../../services/api';

function Home () {

    const {showAlert} = useAlert();
    const {setLoadingVisible} = useLoading();

    const [modalVisible, setModalVisible] = useState(false);
    const [petDetail, setPetDetail] =useState('');

    const [pets, setPets] = useState(false);

    const [attPets, setAttPets] = useState(false);

    function calculateAge(date) {
        const dataNasc = new Date (date);
        var ageDifMs = Date.now() - dataNasc.getTime();
        var ageDate = new Date(ageDifMs); 
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }   

    useEffect(async ()=> {
        setLoadingVisible(true);
        try {
            const response = await api.get('/pet');
            setPets(response.data);
        } catch (err) {
            showAlert(
                'ERRO!', 
                "FALHA AO TENTAR SINCRONIZAR INFORMAÇÕES",
            )
            setPets(false);
        }
        setLoadingVisible(false);
    }, [attPets]);

    const handleShowPet = pet => {
        setPetDetail(pet);
        setModalVisible(true);
    }

    const handleDeletePet = async pet => {
        setLoadingVisible(true);
        try{
            const response = await api.delete(`/pet/${pet.IDPET}`);
            showAlert(`${pet.NAME} DELETADO!`, "Todas as informações desse pet foi deletada com sucesso!");
            setModalVisible(false);
            setAttPets(!attPets); 
        } catch (err) {
            showAlert(`ERRO AO DELETAR ${pet.NAME}!`, "Não foi possível deletar o pet. Tente novamente mais tarde!")
        }
        setLoadingVisible(false);
    }

    return (
        <>
        <Loading />
        <Header />
        <div className="container">
            {pets?
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th className="lowPriority">IDADE</th>
                            <th>ANIMAL</th>
                            <th className="lowPriority">RAÇA</th>
                            <th>DONO</th>
                            <th className="lowPriority">TELEFONE</th>
                        </tr>
                    </thead>
                    <tbody>       
                        {pets?.map(pet => (
                            <tr key={pet.IDPET} onClick={e => {handleShowPet(pet)}}>
                                <td>{pet.IDPET}</td>
                                <td>{pet.NAME}</td>
                                <td className="lowPriority">{calculateAge(pet.DATA_NASC)}</td>
                                <td>{pet.TYPE}</td>
                                <td className="lowPriority">{pet.RACA}</td>
                                <td>{pet.OWNER}</td>
                                <td className="lowPriority">{pet.TELEPHONE}</td>
                            </tr>
                        ))}
                    </tbody>
                    
                </table> 
            :
                <div className="emptyContent">
                    <h3>HOUVE ALGUM ERRO!</h3>
                    <img src={noData} />
                    <Button onClick={()=>{setAttPets(!pets)}}>RECARREGAR</Button>
                </div>
            }
            
        </div>
        <ModalDetail
            visible={modalVisible} setVisible={setModalVisible} 
            pet={petDetail}
            handleDelete={handleDeletePet}
            setAttPets={setAttPets}
            attPets={attPets}
        />
        <Alert />
        </>
    )
}

export default Home;