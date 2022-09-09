import axios from "axios";
import React, { useState } from "react";
import api from '../Api/config'
import { Navigate, useNavigate } from "react-router-dom";
import {URL_BASE} from "../../constances/link";

import useForm from "../../hooks/useForm";


const CadastroCliente = () => {
    const navigate = useNavigate()

    const [form, handleChange, clear] = useForm({
        name: '',
        adress: '',
        adress_number: '',
        phone: '',
    })
    // const [user , setUser] = useState()

    const onSubmitForm = (ev) => {
        ev.preventDefault()
    }
    
    const addUser = () => {
        const body = {
            name: form.name,
            adress: form.adress,
            adress_number:form.adress_number,
            phone: form.phone,
           
        }
     
        api.post(`register` , body)
            .then((res) => {
              alert("Usuario criado com sucesso")   
              navigate(`/pet/register`)
               
             
            })
            .catch((error) => {
                console.log(error.message)
            })
    }


    return (
        <div>

            <form onSubmit={onSubmitForm}
            >
                <label>
                    Nome:
                    <input type="text" 
                    value={form.name} 
                    onChange={handleChange} 
                    name = {"name"}
                    />
                    
                </label>

                <label>
                    Endereço:
                    <input type="text" 
                    value={form.adress} 
                    onChange={handleChange} 
                    name = {"adress"}
                    />
                    
                </label>
                <label>
                    Numero Residencial:
                    <input type="text" 
                    value={form.adress_number} 
                    onChange={handleChange} 
                    name = {"adress_number"}
                    />
                    
                </label>

                <label>
                    Telefone:
                    <input type="text" 
                    value={form.phone} 
                    onChange={handleChange} 
                    name = {"phone"}
                    />
                    
                </label>
                <button onClick={()=> addUser()}>Cadastrar</button>
            </form>

       
        </div>
    )
}

export default CadastroCliente