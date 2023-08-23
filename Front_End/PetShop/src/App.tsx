import './App.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Layout from './components/Layout';
import CadastrarPet from './pages/Pet/CadastrarPet/CadastrarPet';
import CadastrarCliente from './pages/Cliente/CadastrarCliente/CadastrarCliente';
import ListagemPet from './pages/Pet/ListagemPet/ListagemPet';
import ListagemCliente from './pages/Cliente/ListagemCliente/ListagemCliente';

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cadastro/pet' element={<CadastrarPet />} />
          <Route path='/cadastro/cliente' element={<CadastrarCliente />} />
          <Route path='/listagem/pet' element={<ListagemPet />} />
          <Route path='/listagem/cliente' element={<ListagemCliente />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
