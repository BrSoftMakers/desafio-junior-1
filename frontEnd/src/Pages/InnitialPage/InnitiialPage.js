import React from "react";
import { useNavigate } from "react-router-dom";



const InnitialPage = () =>{
    const navigate = useNavigate()
    return(
        <div>
            PET SHOP
            <button onClick={() =>  navigate("/user/register")}>
                Novo Cadastro
            </button>
            <button onClick={() => navigate("/pet/register")}>
               Cadastro Pet
            </button>
            <button onClick={() => navigate("/listPet")}>
                Lista Pets
            </button>
        </div>
    )
}


export default InnitialPage;