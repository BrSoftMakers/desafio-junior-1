import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import Login from '../../pages/login';


export default function LoginRoute () {
    const [tokenExist, setTokenExist] = useState(false);

    useEffect(() => {
        const checkAuthentication = async () => {
            const token = Cookies.get('token');
            if(token) {
                setTokenExist(true);
            }
        };

        checkAuthentication();
    }, []);

    return(
        <>
            {(tokenExist) ? <Navigate replace to="/" /> : <Login />}
        </>
    )
}