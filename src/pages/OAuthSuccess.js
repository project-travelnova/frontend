import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import AuthContext from '../context/AuthContext';

const OAuthSuccess = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const token = query.get('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            console.log('Decoded Token:', decodedToken); // Log the entire decoded token
            const user = {
                name: decodedToken.name,
                email: decodedToken.email
            };
            login(user, token);
            navigate('/');
        } else {
            navigate('/');
        }
    }, [login, navigate]);

    return <div>Logging you in...</div>;
};

export default OAuthSuccess;
