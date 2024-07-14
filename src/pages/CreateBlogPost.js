import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import './CreateBlogPost.css';
import Header from '../components/Header';

const CreateBlogPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { user } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost = {
            title,
            description: content,
            author: user.name, // user name is used as author
            date: new Date()
        };

        try {
            await axios.post('http://localhost:5000/api/blogs', newPost, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            alert('Blog post published successfully!');
            setTitle('');
            setContent('');
        } catch (error) {
            console.error('There was an error publishing the blog post!', error);
        }
    };

    if (!user) {
        return <p>You need to be logged in to create a blog post.</p>;
    }

    return (
        <html>
            <Header />
            <div className="create-blog-post">
                <h1>Write Your Story</h1>
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
                    <button type="submit">publish</button>
                </form>
            </div>
        </html>
    );
};

export default CreateBlogPost;
