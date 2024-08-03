import React from 'react';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import './Auth.css';
import { FaGoogle, FaFacebook, FaEnvelope } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const message = location.state?.message;

    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:5000/api/auth/google';
    };

    const handleFacebookLogin = () => {
        window.location.href = 'http://localhost:5000/api/auth/facebook';
    };

    return (
        <div>
            <Header />
        <div>
            <div className="auth-container">
            <h1>{message ? 'To add a post you need to login' : 'Already Member of TravelNova ?'}</h1>
            <div className="social-login">
                <button onClick={handleGoogleLogin} className="google-button">
                    <FaGoogle /> Sign in with Google
                </button>
                <button onClick={handleFacebookLogin} className="facebook-button">
                    <FaFacebook /> Sign in with Meta
                </button>
                <button onClick={() => navigate('/login-email')} className="email-button">
                    <FaEnvelope /> Sign in with Email
                </button>
            </div>
            <p>
                Not a member yet? <Link to="/signup" className="signup-link">Sign Up</Link>
            </p>
        </div>
        </div>
        <Footer />
        </div>
        
    );
};

export default Login;
