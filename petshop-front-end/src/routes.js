    import React, { useEffect } from 'react';
    import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
    import { HelmetProvider, Helmet } from 'react-helmet-async';
    import Cookies from 'js-cookie';
    import Cadastro from './pages/User/cadastro/';
    import Home from './pages/home/';
    import Editar from './pages/User/editar/';
    import Header from './components/Header/Header';
    import LoginRoute from './components/LoginRoute';
    import PrivateRoute from './components/PrivateRoute';
    import AnimalPage from './pages/Pet/Animal/';
    import CadastroAnimal from './pages/Pet/cadastroAnimal/';
    import Logout from './components/Logout'

    // Mapeia títulos de página com base nas rotas
    const routeTitles = {
        '/': 'Página Inicial',
        '/cadastro': 'Cadastro de Usuários',
        '/editar': 'Listagem de Usuários',
        '/AnimalPage': 'Animais Cadastrados',
        '/login': 'Login',
        '/cadastroAnimal': 'Cadastro de Animal',
    };

    // Componente principal que define as rotas e o layout do aplicativo
    const App = () => {
        const navigate = useNavigate(); // Hook para navegação programática
        const location = window.location.pathname;
        const isLoginPage = location === '/login';

        // Define o título da página com base na rota atual ou usa "Página Desconhecida"
        const pageTitle = routeTitles[location] || 'Página Desconhecida';

        // Efeito que verifica o token de autenticação e redireciona para a página de login, se necessário
        useEffect(() => {
            const token = Cookies.get('token');

            if (!token && !isLoginPage) {
                navigate('/login'); // Redireciona para a página de login
            }
        }, [navigate, isLoginPage]);

        return (
            <div>
                <HelmetProvider>
                    <Helmet>
                        <title>{pageTitle}</title> {/* Define o título da página dinamicamente */}
                    </Helmet>
                    {!isLoginPage && <Header title={pageTitle} />} {/* Exibe o cabeçalho, exceto na página de login */}
                    <Routes>
                        <Route path="/" element={<PrivateRoute component={<Editar />} />} />
                        <Route path="/home" element={<PrivateRoute component={<Home />} />} />
                        <Route path="/cadastro" element={<PrivateRoute component={<Cadastro />} />} />
                        <Route path="/editar" element={<PrivateRoute component={<Editar />} />} />
                        <Route path="/login" element={<LoginRoute />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/AnimalPage" element={<PrivateRoute component={<AnimalPage />} />} />
                        <Route path="/cadastroAnimal" element={<PrivateRoute component={<CadastroAnimal />} />} />
                    </Routes>
                </HelmetProvider>
            </div>
        );
    };

    // Componente que envolve o aplicativo com o BrowserRouter do React Router
    const Router = () => {
        return (
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    };

    export default Router;