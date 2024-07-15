import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = ({ id, title, description, author, date }) => {
    return (
        <div className="blog">
            <h3><Link to={`/blog/${id}`}>{title}</Link></h3>
            <p><strong>{author}</strong> - {new Date(date).toLocaleDateString()}</p>
            <p>{description}</p>
            <div className="blog-actions">
                <button>Like</button>
                <button>Comment</button>
                <button>Share</button>
            </div>
        </div>
    );
};

export default Blog;
