import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import { FaGoogle, FaFacebook, FaEnvelope } from 'react-icons/fa';
import Header from '../components/Header';

const Signup = () => {
    const navigate = useNavigate();

    const handleGoogleSignup = () => {
        window.location.href = 'http://localhost:5000/api/auth/google';
    };

    const handleFacebookSignup = () => {
        window.location.href = 'http://localhost:5000/api/auth/facebook';
    };

    return (       
        <div>
        <Header />
        <div className="auth-container">
            <h1>Join TravelNova</h1>
            <p>To share your experience</p>
            <div className="social-login">
                <button onClick={handleGoogleSignup} className="google-button">
                    <FaGoogle /> Sign up with Google
                </button>
                <button onClick={handleFacebookSignup} className="facebook-button">
                    <FaFacebook /> Sign up with Meta
                </button>
                <button onClick={() => navigate('/signup-email')} className="email-button">
                    <FaEnvelope /> Sign up with Email
                </button>
            </div>
            <p>
                Already Member? <Link to="/login" className="login-link">Log In</Link>
            </p>
        </div>
        </div>
    );
};

export default Signup;
