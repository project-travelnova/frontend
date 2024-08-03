import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import './Auth.css';
import Header from '../components/Header';

const LoginWithEmail = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State variable for error message
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear any previous error messages
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            login(response.data.user, response.data.token);
            navigate('/');
        } catch (error) {
            // Set the error message if login fails
            if (error.response && error.response.status === 401) {
                setError('Invalid email or password. Please try again.');
            } else {
                setError('There was an error logging in. Please try again later.');
            }
            console.error('There was an error logging in!', error);
        }
    };

    return (
        <>
            <Header />
            <div className="auth-container">
                <h1>Login with Email</h1>
                {error && <p className="error-message">{error}</p>} {/* Display the error message */}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">    
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className='submit'>Login</button>
                </form>
                <p>
                    Not a member yet? <Link to="/signup">Sign Up</Link>
                </p>
                <p>
                    <Link to="/forgot-password">Forgot Password?</Link>
                </p>
            </div>
        </>
    );
};

export default LoginWithEmail;
