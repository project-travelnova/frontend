// src/components/Footer.js
import React from 'react';
import './Footer.css'; // We'll create this CSS file for styling
import logo_1 from '../assets/logo_1.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <img src={logo_1} alt="TravelNova Logo" className="footer-logo"/>
                </div>
                <div className="footer-section">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/">Terms & Conditions</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <address>
                        104 1069 Wellington Rd South,<br />
                        London ON N6E 2H6
                    </address>
                    <p>
                        <FontAwesomeIcon icon={faPhone} /> (111) 222-3333
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} /> travelnova4@gmail.com
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
