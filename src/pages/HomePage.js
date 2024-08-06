import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';
import Blog from '../components/Blog';
import './HomePage.css';

const HomePage = () => {
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
                const sortedBlogs = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setBlogs(sortedBlogs.slice(0, 3)); // Get the latest 3 blogs
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
            <main>
                <HeroSlider />
                <h2>Latest Blogs</h2>
                <div className="content">
                    <div className="latest-blogs">
                        {blogs.map(blog => (
                            <Blog
                                key={blog._id}
                                id={blog._id}
                                title={blog.title}
                                description={truncateContent(blog.description, 300)}
                                author={blog.author}
                                date={blog.date}
                                image={blog.image}
                                tag={blog.tag?.name} // Assuming tag is populated
                            />
                        ))}
                    </div>
                    <div className="by-province">
                        <a href="#" onClick={() => handleTagClick('')}><h3>By Province</h3></a>
                        <ul>
                            {tags.map(tag => (
                                <li key={tag._id}>
                                    <a href="#" onClick={() => handleTagClick(tag._id)}>{tag.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
