import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';
import Header from '../components/Header';

const SignupWithEmail = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirm password
    const [dob, setDob] = useState('');
    const [error, setError] = useState(''); // State variable for error message
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        const newUser = { name, email, password, dob };
        try {
            await axios.post('http://localhost:5000/api/auth/signup', newUser);
            alert('Signup successful! Please login.');
            navigate('/login');
        } catch (error) {
            console.error('There was an error signing up!', error);
        }
    };

    return (
        <>
            <Header />
            <div className="auth-container">
                <h1>Create new Account</h1>
                <p>Already Registered? <Link to="/login">Login</Link></p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">NAME</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Jiara Martins"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">EMAIL</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="hello@reallygreatsite.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">PASSWORD</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="*******"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="*******"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">DATE OF BIRTH</label>
                        <input
                            type="date"
                            id="dob"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>} {/* Display the error message */}
                    <button type="submit" className='submit'>Sign up</button>
                </form>
            </div>
        </>
    );
};

export default SignupWithEmail;
