import React, { useEffect, useState, useContext} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BlogDetails.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/blogs/${id}`)
            .then(response => {
                setBlog(response.data);
                setComments(response.data.comments);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, [id]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (!comment.trim()) {
            alert('Comment cannot be empty');
            return;
        }

        try {
            console.log('Sending comment with token:', user.token); // Debug log
            const response = await axios.post(
                `http://localhost:5000/api/comments/${blog._id}/comments`,
                { text: comment },
                { headers: { Authorization: `Bearer ${user.token}` } }
            );
            console.log('Comment response:', response.data); // Debug log
            setComments([...comments, response.data]);
            setComment('');
        } catch (err) {
            console.error('There was an error submitting the comment!', err);
        }
    };

    const handleDelete = async () => {
        if (!window.confirm('Are you sure you want to delete this blog post?')) {
            return;
        }

            try {
                await axios.delete(`http://localhost:5000/api/blogs/${blog._id}`, {
                    headers: { Authorization: `Bearer ${user.token}` }
                });
                navigate('/');
            } catch (err) {
                console.error('There was an error deleting the blog post!', err);
            }
    };
    
    const handleShare = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('URL copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy URL: ', err);
        });
    };
    

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
                {blog.image && <img src={`http://localhost:5000/${blog.image}`} alt={blog.title} />}
                <div className="blog-content">
                    {blog.description}
                </div>
                <div className="blog-actions">
                {user && user.name === blog.author && (
                        <>
                            <button onClick={() => navigate(`/edit-blog/${id}`)}>Edit</button>
                            <button onClick={handleDelete}>Delete</button>
                        </>
                    )}
                </div>
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
                <div className="comments-section">
                    <h3>Comments</h3>
                    {comments.map((comment, index) => (
                        <div key={index} className="comment">
                            <p><strong>{comment.user.name}</strong> - {new Date(comment.date).toLocaleDateString()}</p>
                            <p>{comment.text}</p>
                        </div>
                    ))}
                </div>
                {user && (
                    <form onSubmit={handleCommentSubmit} className="comment-form">
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Write a comment..."
                            required
                        ></textarea>
                        <button type="submit">Add Comment</button>
                    </form>
                )}
                {!user && <p>You need to be logged in to comment.</p>}
            </main>
            <Footer />
        </div>
    );
};

export default BlogDetails;
