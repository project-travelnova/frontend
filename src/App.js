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
import BlogPage from './pages/BlogPage';
import BlogDetails from './pages/BlogDetails';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ContactUs from './pages/ContactUs';
import TermsAndConditions from './pages/Terms&Conditions';
import EditBlogPost from './pages/EditBlogPost';
import AboutUs from './pages/AboutUs';
import TagFilterPage from './pages/TagFilterPage';

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
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blog/:id" element={<BlogDetails />} /> {/* Add BlogDetails route */}
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/terms" element={<TermsAndConditions />} />
                    <Route path="/edit-blog/:id" element={<ProtectedRoute element={EditBlogPost} />} /> {/* Add EditBlogPost route */}
                    <Route path="/about" element={<AboutUs />} /> {/* Add About Us route */}
                    <Route path="/tags/:tag" element={<TagFilterPage />} /> {/* Add this route */}
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
