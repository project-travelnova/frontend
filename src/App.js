import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateBlogPost from './pages/CreateBlogPost';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import OAuthSuccess from './pages/OAuthSuccess';
import EditProfile from './pages/EditProfile';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import SignupWithEmail from './pages/SignupWithEmail';
import LoginWithEmail from './pages/LoginWithEmail';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/login-email" element={<LoginWithEmail />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signup-email" element={<SignupWithEmail />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/auth/success" element={<OAuthSuccess />} />
                    <Route path="/create-post" element={<ProtectedRoute element={CreateBlogPost} />} />
                    <Route path="/edit-profile" element={<ProtectedRoute element={EditProfile} />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
