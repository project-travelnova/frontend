import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { jwtDecode }from 'jwt-decode';

const OAuthSuccess = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const token = query.get('token');
        if (token) {
            const user = jwtDecode(token);
            login(user, token);
            navigate('/');
        } else {
            navigate('/login');
        }
    }, [login, navigate]);

    return <div>Logging you in...</div>;
};

export default OAuthSuccess;
