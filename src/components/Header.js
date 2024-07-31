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
            navigate('/login', { state: { message: ' '}});
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
            <a href='/' className="header-logo">
                <img src={logo} alt="TravelNova Logo" /><h1>TravelNova</h1>
            </a>
            <nav className="header-nav">
                <Link to="/">HOME</Link>
                <Link to="/blog">BLOG</Link>
                <button onClick={handleWriteClick} className="write-button">ADD</button>
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
                    <Link to="/login">LOGIN</Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
