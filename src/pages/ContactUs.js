import React, { useState } from 'react';
import './ContactUs.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import image_1 from '../assets/contact.jpg';

const ContactUs = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const contactDetails = { firstName, lastName, email, message };
        fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactDetails),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div>
            <Header />
        <div className="contactContainer">
            <div className="contactleft"><img src={image_1} /></div>
            <div className="contactright">
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="contact-input">
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default ContactUs;
