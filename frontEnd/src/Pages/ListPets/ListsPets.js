
import axios from "axios";
import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import ListComponents from "../../components/listsUserComponents";
import api from '../Api/config'





const ListPage = () =>{
    const [pets , setPets] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
            api.get("/handlePet").then((res)=>{
                setPets(res.data)
                
            }).catch((err)=>{
    
            })
    },[pets])
  
    const mapPets = pets && pets.map((item) =>{
        return(
            <div key={item.id}>
                <ListComponents listspet={item}/>
            </div>
        )
    })
return(
    <div>
        <h1>Lista de Pets</h1> <button onClick={()=> navigate("/")}>voltar</button>
        
        
        {mapPets}

       
    </div>
)
}


export default ListPage
