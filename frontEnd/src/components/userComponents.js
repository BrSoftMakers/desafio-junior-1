import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../Pages/Api/config"



const UserComponents = (props) =>{
    const { id ,name , adress , adress_number , phone} = props.detailsUser
    const navigate = useNavigate()
    console.log(props.detailsUser.id)

    const deleteUserById = (idUser) =>{
        api.delete(`getUser/:${idUser}`).then((res)=>{
            alert("Usuario removido")
            navigate("/listPet")
        }).catch((error)=>{
            console.log(error.message)
        })
    }


    return(
        <div>
            <h2>Nome:</h2> <p>{name}</p>
            <h2>Endereço:</h2> <p>{adress}</p> - <p>N:{phone}</p>
            <h2>Telefone:</h2> <p>{adress_number}</p>
            <button onClick={()=> navigate("/listPet")}>Voltar</button>
            <button onClick={() => deleteUserById(id)}>Excluir</button>
        </div>
    )
}

export default UserComponents