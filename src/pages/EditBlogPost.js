import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './CreateBlogPost.css'; // Assuming you have similar styles for creating and editing blog posts

const EditBlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/blogs/${id}`)
            .then(response => {
                const blog = response.data;
                setTitle(blog.title);
                setDescription(blog.description);
            })
            .catch(error => console.error(error));
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedBlog = { title, description };

        try {
            await axios.put(`http://localhost:5000/api/blogs/${id}`, updatedBlog, {
                headers: { Authorization: `Bearer ${user.token}` }
            });
            alert('Blog post updated successfully');
            navigate(`/blog/${id}`);
        } catch (error) {
            console.error('There was an error updating the blog post!', error);
        }
    };

    return (
        <div>
            <Header />
            <main className="create-blog-post">
                <h1>Edit Blog Post</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit">Update</button>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default EditBlogPost;
