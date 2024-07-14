// src/components/Footer.js
import React from 'react';
import './Footer.css'; // We'll create this CSS file for styling
import logo_1 from '../assets/logo_1.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <img src={logo_1} alt="TravelNova Logo" className="footer-logo"/>
                </div>
                <div className="footer-section">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Terms & Condition</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <address>
                        104 1069 Wellington Rd South,<br />
                        London ON N6E 2H6
                    </address>
                    <p>
                        <FontAwesomeIcon icon={faPhone} /> (519) 452-4430
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} /> guptaneha02525@gmail.com
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
