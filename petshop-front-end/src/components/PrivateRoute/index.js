import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Navigate, Route } from 'react-router-dom';
import Login from '../../pages/login';

export default function PrivateRoute({ component }) {
    const [tokenExist, setTokenExist] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
            const token = Cookies.get('token');
            if(!token) {
                setTokenExist(false);
            }
        };

        checkAuthentication();
    }, []);

    return(
        <>
            {(tokenExist) ? component : <Navigate replace to="/login"/>} 
        </>
    )
}