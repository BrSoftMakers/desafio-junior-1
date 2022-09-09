import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserComponents from "../../components/userComponents";
import api from '../Api/config'


const DetailsUser = () => {
    const params = useParams()
    const navigate = useNavigate()
    const { detailsUser } = params
    const [user, setUser] = useState('')

   

    useEffect((id)=>{
        api.get(`getUserById/${detailsUser}`).then((res)=>{
            setUser(res.data)
         
        }).catch((err)=>{
            console.log("Algo de errado aconteceu")
        })
        },[detailsUser])



    return (
        <div>
            <UserComponents detailsUser={user}/>
        </div>
    )
}

export default DetailsUser