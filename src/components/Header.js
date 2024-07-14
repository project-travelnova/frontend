import React, { useContext, useState } from 'react';
import './Header.css'; // Make sure to create and import the CSS file
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { FaCaretDown } from 'react-icons/fa';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleWriteClick = () => {
        if (user) {
            navigate('/create-post');
        } else {
            navigate('/login');
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };
    

    return (
        <header className="header">
            <div className="header-logo">
                <img src={logo} alt="TravelNova Logo" />
                <h1>TravelNova</h1>
            </div>
            <nav className="header-nav">
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <button onClick={handleWriteClick} className="write-button">Write</button>
                {user ? (
                    <div className="user-menu">
                        <button onClick={toggleDropdown} className="user-button">
                            {user.name} <FaCaretDown />
                        </button>
                        {dropdownOpen && (
                            <div className="dropdown-menu">
                                <Link to="/edit-profile" className="dropdown-item">Edit Profile</Link>
                                <Link onClick={handleLogout} className="dropdown-item">Logout</Link>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/login">Login</Link>
                )}
                <Link to="/get-started" className="get-started">Get Started</Link>
            </nav>
        </header>
    );
};

export default Header;
