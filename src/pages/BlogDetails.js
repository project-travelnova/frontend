import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BlogDetails.css';
import Header from '../components/Header';

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        axios.get(`http://localhost:5000/api/blogs/${id}`)
            .then(response => {
                console.log(response.data); // Log the response data
                setBlog(response.data);
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch(error => {
                console.error(error);
                setLoading(false); // Set loading to false even if there's an error
            });
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!blog) {
        return <p>Blog not found</p>;
    }

    return (
        <div>
        <Header />
        <main className="blog-details-container">
            <h1>{blog.title}</h1>
            <p><strong>{blog.author}</strong> - {new Date(blog.date).toLocaleDateString()}</p>
            <div className="blog-content">
                {blog.description}
            </div>
            <div className="blog-actions">
                <button>Like</button>
                <button>Comment</button>
                <button>Share</button>
            </div>
        </main>
        </div>
    );
};

export default BlogDetails;
