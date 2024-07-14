import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import './EditProfile.css';
import Header from '../components/Header';

const EditProfile = () => {
    const { user, updateUser } = useContext(AuthContext);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [dob, setDob] = useState(user.dob);
    const [gender, setGender] = useState(user.gender);
    const [bio, setBio] = useState(user.bio);
    const [instagram, setInstagram] = useState(user.instagram);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = {
            firstName,
            lastName,
            username,
            email,
            dob,
            gender,
            bio,
            instagram
        };
        updateUser(updatedUser);
    };

    return (
        <div>
        <Header />
        <div className="edit-profile-container">
            <form onSubmit={handleSubmit} className="edit-profile-form">
                <h2>Edit Profile</h2>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <input
                        type="text"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Short Bio</label>
                    <input
                        type="text"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Instagram Handle</label>
                    <input
                        type="text"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                    />
                </div>
                <div className="form-buttons">
                    <button type="button" className="cancel-button" onClick={() => window.history.back()}>Cancel</button>
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default EditProfile;
