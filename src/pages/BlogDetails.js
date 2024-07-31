import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BlogDetails.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthContext from '../context/AuthContext';

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

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
            const response = await axios.post(
                `http://localhost:5000/api/comments/${blog._id}/comments`,
                { text: comment },
                { headers: { Authorization: `Bearer ${user.token}` } }
            );
            setComments([...comments, response.data]);
            setComment('');
        } catch (err) {
            console.error('There was an error submitting the comment!', err);
        }
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
                    <button>Like</button>
                    <button>Comment</button>
                    <button>Share</button>
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
