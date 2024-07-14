import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const OAuthSuccess = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const token = query.get('token');
        if (token) {
            // Decode token to get user information (this is a simplified example)
            const user = { email: 'oauth_user@example.com' }; // Replace with actual user info from token
            login(user, token);
            navigate('/');
        } else {
            navigate('/login');
        }
    }, [login, navigate]);

    return <div>Logging you in...</div>;
};

export default OAuthSuccess;
