import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from '../components/Blog';
import './BlogPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState('');

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/tags');
                setTags(response.data);
            } catch (error) {
                console.error('There was an error fetching the tags!', error);
            }
        };

        fetchTags();
    }, []);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/blogs${selectedTag ? `/tag/${selectedTag}` : ''}`);
                setBlogs(response.data);
            } catch (error) {
                console.error('There was an error fetching the blogs!', error);
            }
        };

        fetchBlogs();
    }, [selectedTag]);

    const handleTagClick = (tagId) => {
        setSelectedTag(tagId);
    };

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
            <div className="blog-container">
                <div className="blog-content">
                    <div className="blog-filter">
                        <h2>Explore</h2>
                    </div>
                    <div className="blog-list">
                        {blogs.map(blog => (
                            <Blog
                                key={blog._id}
                                id={blog._id}
                                title={blog.title}
                                description={truncateContent(blog.description, 200)}
                                author={blog.author}
                                date={blog.date}
                                image={blog.image}
                                tag={blog.tag} // Pass tag directly
                            />
                        ))}
                    </div>
                </div>
                <div className="blog-sidebar">
                    <img src="https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Province" />
                    <h3><a href="#" onClick={() => handleTagClick('')}>By Province</a></h3>
                    <ul>
                        {tags.map((tag) => (
                            <li key={tag._id}>
                                <a href="#" onClick={() => handleTagClick(tag._id)}>
                                    {tag.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BlogPage;
