import React from 'react';
import './AboutUs.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import jinit from '../assets/jinit.jpg';
import gurjyot from '../assets/gurjyot.jpg';
import neha from '../assets/neha.jpg';
import amartya from '../assets/amartya.jpg';
import jaspreet from '../assets/jaspreet.jpg';
import varshini from '../assets/varshini.jpg';
import yashika from '../assets/yashika.jpg';
import amarpreet from '../assets/amarpreet.jpg';

const teamMembers = [
    {
        name: 'Jinit Gohil',
        image: jinit,
        description: 'Team Lead / Frontend Developer / Database Admin',
    },
    {
        name: 'Gurjyot Singh',
        image: gurjyot,
        description: 'Frontend Developer / System Architect',
    },
    {
        name: 'Amartya Rana',
        image: amartya,
        description: 'Backend Lead / Database Admin',
    },
    {
        name: 'Neha Gupta',
        image: neha,
        description: 'UI Designer / Tester Lead',
    },
    {
        name: 'Jaspreet Buttar',
        image: jaspreet,
        description: 'Technical Writer / Scrum Master',
    },
    {
        name: 'Varshini C',
        image: varshini,
        description: 'UI Designer / QA Tester',
    },
    {
        name: 'Yashika Sawhney',
        image: yashika,
        description: 'QA Tester / Scrum Master',
    },
    {
        name: 'Amarpreet Kaur',
        image: amarpreet,
        description: 'Technical Writer / Scrum Master',
    },
];

const AboutUs = () => {
    return (
        <div>
            <Header />
            <div className="about-us-container">
                <h1>About Us</h1>
                <div className="team">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member">
                            <img src={member.image} alt={member.name} className="team-member-image" />
                            <h3>{member.name}</h3>
                            <p>{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
