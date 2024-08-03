import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode}  from 'jwt-decode';
import AuthContext from '../context/AuthContext';

const OAuthSuccess = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const token = query.get('token');
        if (token) {
            // Decode token to get user information
            const decodedToken = jwtDecode(token);
            const user = { name: decodedToken.name, email: decodedToken.email }; // Adjust according to your token structure
            login(user, token);
            console.log(decodedToken.name)
            navigate('/');
        } else {
            navigate('/login');
        }
    }, [login, navigate]);

    return <div>Logging you in...</div>;
};

export default OAuthSuccess;
