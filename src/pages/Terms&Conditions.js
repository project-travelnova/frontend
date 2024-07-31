import React from 'react';
import './Terms&Conditions.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
    return (
        <div>
            <Header />
        <div className="terms-container">
            <h1>Terms & Conditions</h1>
            <p>Welcome to TravelNova! These terms and conditions outline the rules and regulations for the use of TravelNova's website, located at www.travelnova.com.</p>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing this website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern TravelNova's relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.</p>

            <h2>2. Intellectual Property Rights</h2>
            <p>Unless otherwise stated, TravelNova and/or its licensors own the intellectual property rights for all material on TravelNova. All intellectual property rights are reserved. You may view and/or print pages from http://www.travelnova.com for your own personal use subject to restrictions set in these terms and conditions.</p>

            <p>You must not:</p>
            <ul>
                <li>Republish material from http://www.travelnova.com</li>
                <li>Sell, rent, or sub-license material from http://www.travelnova.com</li>
                <li>Reproduce, duplicate or copy material from http://www.travelnova.com</li>
                <li>Redistribute content from TravelNova (unless content is specifically made for redistribution).</li>
            </ul>

            <h2>3. User-Generated Content</h2>
            <p>This website may allow users to post content, including comments, articles, and other materials. TravelNova does not review all content posted by users and is not responsible for such content. All user-generated content must not:</p>

            <ul>
                <li>Infringe any intellectual property rights.</li>
                <li>Contain defamatory, offensive, or otherwise illegal material.</li>
                <li>Be used for any unlawful purpose.</li>
            </ul>
            <p>TravelNova reserves the right to remove any user-generated content at its sole discretion.</p>

            <h2>4. External Links</h2>
            <p>TravelNova may contain links to external websites that are not provided or maintained by or in any way affiliated with TravelNova. Please note that TravelNova does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>

            <h2>5. Limitation of Liability</h2>
            <p>TravelNova will not be liable for any loss or damage of any nature. We do not guarantee that the website will be constantly available or that the information on the website is complete, true, accurate, or non-misleading.</p>

            <h2>6. Changes to These Terms</h2>
            <p>TravelNova reserves the right to revise these terms and conditions at any time. By using this website, you are expected to review these terms regularly to ensure you understand all terms and conditions governing the use of this website.</p>

            <h2>7. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of [Your Country], and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at support@travelnova.com.</p>
        </div>
        <Footer />
        </div>
    );
};

export default TermsAndConditions;
