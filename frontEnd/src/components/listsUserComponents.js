import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";



const ListComponents = (props) =>{
    const {id ,name , age , breed , type , id_User} = props.listspet
    const navigate = useNavigate()
    
    
    const deleteUser = (idPet) =>{
        axios.delete(`/handlePet/${idPet}`).then((res)=>{
           alert("Sucesso")
        }).catch((error)=>{
            console.log("Usuario não encontrado")
        })
    }
    
    return( 
        <div>
            <h3>Nome:</h3> <p>{name}</p>
               <h3>Idade:</h3> <p>{age}</p>
               <h3>Raça:</h3> <p> {breed}</p>
               <h3>Tipo:</h3> <p>{type}</p>
               <br/>
               <button onClick={() => navigate(`/listPet/${id_User}`)}>Informações</button>
               <button onClick={() => deleteUser(`${id}`)}>Finalizar</button>

               <hr/>
        </div>
    )
}

export default ListComponents