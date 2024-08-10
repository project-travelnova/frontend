import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import Alert from './Alert';


const Blog = ({ id, title, description, author, date, image, tag }) => {
    const [alert, setAlert] = useState({ message: '', type: '' }); // State for alert message
    const handleShare = () => {
        const url = `${window.location.origin}/blog/${id}`;
        navigator.clipboard.writeText(url).then(() => {
            setAlert({message:'URL copied to clipboard', type:'success'});
        }).catch(err => {
            console.error('Failed to copy URL: ', err);
        });
    };
    

    return (
        <div>
        {alert.message && <Alert message={alert.message} type={alert.type} onClose={() => setAlert({ message: '', type: '' })} />}
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
                {tag && <p className="blog-tag">Tag: {tag.name}</p>}
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
        </div>
    );
};

export default Blog;
