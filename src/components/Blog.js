// Blog.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = ({ id, title, description, author, date, image }) => {

    const handleShare = () => {
        const url = `${window.location.origin}/blog/${id}`;
        navigator.clipboard.writeText(url).then(() => {
            alert('URL copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy URL: ', err);
        });
    };

    return (
        <div className="blog">
            {image && (
                <div className="blog-left">
                    <img src={`http://localhost:5000/${image}`} alt={title} className="blog-image" />
                </div>
            )}
            <div className="blog-right">
                {/* Blog title is a link that navigates to the blog details page */}
                <h3><Link className="blog-title" to={`/blog/${id}`}>{title}</Link></h3>
                {/* Blog meta information */}
                <p className="blog-meta">
                    <strong>{author}</strong> - {new Date(date).toLocaleDateString()}
                </p>
                {/* Blog description */}
                <p className="blog-description">{description}</p>
                {/* Blog actions */}
                <div className="blog-actions">
                    <button className="action-button">
                        <i className="fas fa-thumbs-up"></i> Like
                    </button>
                    <Link className="comment-link" to={`/blog/${id}`}><button className="action-button">
                        <i className="fas fa-comment"></i> Comment
                    </button></Link>
                    <button className="action-button" onClick={handleShare}>
                        <i className="fas fa-share"></i> Share
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Blog;
