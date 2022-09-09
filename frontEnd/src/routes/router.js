import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePet from "../Pages/CadastroPet/CadastroPet";
import CadastroCliente from "../Pages/CadastroUser/Cadastro";
import InnitialPage from "../Pages/InnitialPage/InnitiialPage";
import ListPage from "../Pages/ListPets/ListsPets";
import DetailsUser from "../Pages/GetUserById/GetUserById";



const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<InnitialPage/>}/>
          <Route path="/user/register" element={<CadastroCliente/>} />
          <Route path="/pet/register" element={<CreatePet/>} />
          <Route path="/listPet" element={<ListPage/>}/>
          <Route path="/listPet/:detailsUser" element={<DetailsUser/>}/>

          
        </Routes>
      </BrowserRouter>
    );
  };

export default Router;