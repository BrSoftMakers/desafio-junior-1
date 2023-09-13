import React, { useEffect } from 'react';
import Cookies from 'js-cookie';

const Logout = () => {
    useEffect(() => {
        // Lógica de logout aqui, como a remoção de cookies ou a revogação de tokens.
        Cookies.remove('token');
        Cookies.remove('userId');

        // Redirecione para a página de login após o logout bem-sucedido.
        window.location.href = '/login';
    }, []);

    return (
        <div>
            <p>Realizando logout...</p>
        </div>
    );
};

export default Logout;