import React, { useState } from 'react';
import './Auth.css';
import Header from '../components/Header';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Mock API call for password reset
        alert('Password reset link sent to your email.');
    };

    return (
        <div>
        <Header />
        <div className="auth-container">
            <h1>Forgot Password</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Send</button>
            </form>
        </div>
        </div>
    );
};

export default ForgotPassword;
