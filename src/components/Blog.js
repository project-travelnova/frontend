import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = ({ id, title, description, author, date, image }) => {
    return (
        <div className="blog">
            {image && (
                <div className="blog-left">
                    <img src={`http://localhost:5000/${image}`} alt={title} className="blog-image" />
                </div>
            )}
            <div className="blog-right">
                <h3><Link className="blog-title" to={`/blog/${id}`}>{title}</Link></h3>
                <p className="blog-meta">
                    <strong>{author}</strong> - {new Date(date).toLocaleDateString()}
                </p>
                <p className="blog-description">{description}</p>
                <div className="blog-actions">
                    <button className="action-button">
                        <i className="fas fa-thumbs-up"></i> Like
                    </button>
                    <Link className="comment-link" to={`/blog/${id}`}><button className="action-button">
                        <i className="fas fa-comment"></i> Comment
                    </button></Link>
                    <button className="action-button">
                        <i className="fas fa-share"></i> Share
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Blog;
