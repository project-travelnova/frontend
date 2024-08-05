import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            console.log('Stored User:', userData); // Debug log
            setUser(userData);
            axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
        }
    }, []);

    const login = (userData, token) => {
        console.log('Logging in with:', userData, token); // Debug log
        setUser({ ...userData, token });
        localStorage.setItem('user', JSON.stringify({ ...userData, token }));
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    };

    const logout = () => {
        console.log('Logging out'); // Debug log
        setUser(null);
        localStorage.removeItem('user');
        delete axios.defaults.headers.common['Authorization'];
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
