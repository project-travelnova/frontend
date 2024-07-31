import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import './CreateBlogPost.css';
import Header from '../components/Header';
import { FaImage, FaTimes } from 'react-icons/fa'; // Import image and times icons from react-icons
import Footer from '../components/Footer';

const CreateBlogPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const { user } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', content);
        formData.append('author', user.name);
        formData.append('date', new Date().toISOString());
        if (image) {
            formData.append('image', image);
        }

        try {
            await axios.post('http://localhost:5000/api/blogs', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            alert('Blog post published successfully!');
            setTitle('');
            setContent('');
            setImage(null);
        } catch (error) {
            if (error.response && error.response.data) {
                alert(error.response.data.message);
            } else {
                console.error('There was an error publishing the blog post!', error);
            }
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
            if (!allowedTypes.includes(file.type)) {
                alert('Invalid file type. Only jpg, jpeg, and png are allowed.');
                e.target.value = null;
                setImage(null);
            } else {
                setImage(file);
            }
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
    };

    if (!user) {
        return <p>You need to be logged in to create a blog post.</p>;
    }

    return (
        <div>
            <Header />
            <div className="create-blog-post">
                <h1>Write Your Story</h1>
                <div className="file-input-container">
                        <h3>Upload Image</h3>
                        <label className="file-input-label">
                            <FaImage size={24} />
                            <input
                                type="file"
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                            />
                        </label>
                        {image && (
                            <div className="image-preview">
                                <span>{image.name}</span>
                                <FaTimes className="remove-image-icon" onClick={handleRemoveImage} />
                            </div>
                        )}
                    </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Start Writing"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit">Publish</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default CreateBlogPost;
