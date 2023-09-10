import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async'; // Importe Helmet e HelmetProvider
import Cookies from 'js-cookie';
import Cadastro from './pages/User/cadastro/';
import Home from './pages/User/home/';
import Editar from './pages/User/editar/';
import Header from './components/Header';
import LoginRoute from './components/LoginRoute';
import PrivateRoute from './components/PrivateRoute';
import AnimalPage from './pages/Pet/Animal/';
import CadastroAnimal from './pages/Pet/cadastroAnimal/';

const routeTitles = {
    '/': 'Página Inicial',
    '/cadastro': 'Cadastro de usuários',
    '/editar': 'Usuários cadastrados',
    '/AnimalPage': 'Animais Cadastrados',
    '/cadastroAnimal': 'Cadastro de Animal',
};

const App = () => {
    const navigate = useNavigate(); // Adicione useNavigate para navegação programática

    const location = window.location.pathname;
    const isLoginPage = location === '/login';

    const pageTitle = routeTitles[location] || 'Página Desconhecida';

    useEffect(() => {
        const token = Cookies.get('token');

        if (!token && !isLoginPage) {
            navigate('/login'); // Use navigate para redirecionar em vez de window.location.href
        }
    }, [navigate, isLoginPage]);

    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>{pageTitle}</title>
                </Helmet>
                {!isLoginPage && <Header title={pageTitle}/>}
                <Routes>
                    <Route path="/" element={<PrivateRoute component={<Home />} />} />
                    <Route path="/cadastro" element={<PrivateRoute component={<Cadastro />} />} />
                    <Route path="/editar" element={<PrivateRoute component={<Editar />} />} />
                    <Route path="/login" element={<LoginRoute />}/>
                    <Route path="/AnimalPage" element={<PrivateRoute component={<AnimalPage />} />} />
                    <Route path="/cadastroAnimal" element={<PrivateRoute component={<CadastroAnimal />} />} />
                </Routes>
            </HelmetProvider>
        </div>
    );
};

const Router = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

export default Router;