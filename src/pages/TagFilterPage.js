import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Blog from '../components/Blog';

const TagFilterPage = () => {
    const { tag } = useParams();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        console.log('Fetching blogs for tag:', tag); // Debugging log
        axios.get(`http://localhost:5000/api/blogs/tag/${tag}`)
            .then(response => {
                console.log('Blogs fetched:', response.data); // Debugging log
                setBlogs(response.data);
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
            });
    }, [tag]);

    const truncateContent = (content, maxLength) => {
        if (!content) return '';
        if (content.length <= maxLength) {
            return content;
        }
        return content.substring(0, maxLength) + '...';
    };

    return (
        <div>
            <Header />
            <div className="tag-filter-page">
                <h2>Blogs tagged with "{tag}"</h2>
                <div className="blog-list">
                    {blogs.length > 0 ? (
                        blogs.map(blog => (
                            <Blog
                                key={blog._id}
                                id={blog._id}
                                title={blog.title}
                                description={truncateContent(blog.description, 300)}
                                author={blog.author}
                                date={blog.date}
                                image={blog.image}
                            />
                        ))
                    ) : (
                        <p>No blogs found for this tag.</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TagFilterPage;
