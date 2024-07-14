import React from 'react';
import './Blog.css';

const Blog = ({ title, description, author, date }) => {
    return (
        <div className="blog">
            <div className="blog-header">
                <h3>{author}</h3>
                <p>{new Date(date).toLocaleDateString()}</p>
            </div>
            <h2>{title}</h2>
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