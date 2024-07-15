import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';
import Blog from '../components/Blog';
import './HomePage.css';

const HomePage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/blogs')
            .then(response => setBlogs(response.data))
            .catch(error => console.error(error));
    }, []);

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
            <main>
                <HeroSlider />
                <h2>Popular Blogs</h2>
                <div className="content">
                    <div className="popular-blogs">
                        {blogs.map(blog => (
                            <Blog
                                key={blog._id}
                                id={blog._id} // Add id prop
                                title={blog.title}
                                description={truncateContent(blog.description, 300)}
                                author={blog.author}
                                date={blog.date}
                            />
                        ))}
                    </div>
                    <div className="by-province">
                        <h3>By Province</h3>
                        <ul>
                            <li>Longest Coastline</li>
                            <li>Alberta</li>
                            <li>British Columbia</li>
                            <li>Manitoba</li>
                            <li>New Brunswick</li>
                            <li>Newfoundland and Labrador</li>
                            <li>Nova Scotia</li>
                            <li>Ontario</li>
                            <li>Prince Edward Island</li>
                            <li>Quebec</li>
                            <li>Saskatchewan</li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
