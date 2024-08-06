import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from '../components/Blog';
import './BlogPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/blogs')
            .then(response => setBlogs(response.data))
            .catch(error => console.error(error));
    }, []);

    const truncateContent = (content, maxLength) => {
        if (!content) return ''; // Handle undefined content
        if (content.length <= maxLength) {
            return content;
        }
        return content.substring(0, maxLength) + '...';
    };

    return (
        <div>
            <Header />
            <div className="blog-container">
                <div className="blog-content">
                    <div className="blog-filter">
                        <h2>Explore</h2>
                    </div>
                    <div className="blog-list">
                        {blogs.map(blog => (
                            <Blog
                                key={blog._id} // Ensure each blog has a unique key
                                id={blog._id}
                                title={blog.title}
                                description={truncateContent(blog.description, 200)}
                                author={blog.author}
                                date={blog.date}
                                image={blog.image}
                            />
                        ))}
                    </div>
                </div>
                <div className="blog-sidebar">
                    <h2>By Province</h2>
                    <img src="https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Province" />
                    <ul>
                        <li>Longest Coastline</li>
                        <li>Alberta</li>
                        <li>British Columbia</li>
                        <li>Manitoba</li>
                        <li>New Brunswick</li>
                        <li>Newfoundland and Labrador</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BlogPage;
