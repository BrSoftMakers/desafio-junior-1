import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import api from '../Api/config'
import useForm from "../../hooks/useForm";
import { Navigate, useNavigate } from "react-router-dom";
import { URL_BASE } from "../../constances/link";




const CreatePet = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [users, setUser] = useState([])

    const [form, handleChange, clear] = useForm({
        name: '',
        age: '',
        type: '',
        breed: '',
        id_user : '',
    })

    const onSubmitForm = (ev) => {
        ev.preventDefault()
    }

    const addUser = () => {
        const body = {
            name: form.name,
            age: form.age,
            type: form.type,
            breed: form.breed,
            user_id: form.id_user
        }
        api.post("/createPet", body)
            .then((res) => {
                alert("Pet adicionado com sucesso")
                navigate("/")

            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    useEffect(()=>{
        api.get(`getUser`).then((res) => {
            setUser(res.data)

        }).catch((error) => {
            console.log("Algo deu errado")
        })
    }, [])
   

    const mapUser = users && users.map((item)=>{
        return(<option key={item.id} value={item.id}>{item.name}</option>)
    })

   
    return (
        <div>

            <form onSubmit={onSubmitForm}
            >
                <label>
                    Nome:
                    <input type="text"
                        value={form.name}
                        onChange={handleChange}
                        name={"name"}
                    />

                </label>

                <label>
                    Idade:
                    <input type="text"
                        value={form.age}
                        onChange={handleChange}
                        name={"age"}
                    />

                </label>
                <label>
                    Tipo:
                    <input type="text"
                        placeholder="DOG ou CAT"
                        value={form.type}
                        onChange={handleChange}
                        name={"type"}
                    />

                </label>

                <label>
                    Raça:
                    <input type="text"
                        value={form.breed}
                        onChange={handleChange}
                        name={"breed"}
                    />

                </label>
                <label>Owner:
                <select value={form.id_user} onChange={handleChange} name={"id_user"}>
                    {mapUser}
                </select>
                </label>
                

               

                <button onClick={() => addUser()}>Enviar</button>
                <button onClick={()=> navigate("/")}>Voltar</button>
            </form>


        </div>
    )
}


export default CreatePet