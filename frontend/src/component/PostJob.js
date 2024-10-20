// frontend/src/components/PostJob.js
import React, { useState } from 'react';
import axios from 'axios';

const PostJob = () => {
    const [jobData, setJobData] = useState({
        title: '',
        description: '',
        experienceLevel: '',
        endDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobData({ ...jobData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            await axios.post('http://localhost:5000/api/jobs', jobData, {
                headers: { Authorization: token },
            });
            alert('Job posted successfully!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" onChange={handleChange} placeholder="Job Title" required />
            <textarea name="description" onChange={handleChange} placeholder="Job Description" required />
            <input type="text" name="experienceLevel" onChange={handleChange} placeholder="Experience Level" required />
            <input type="date" name="endDate" onChange={handleChange} required />
            <button type="submit">Post Job</button>
        </form>
    );
};

export default PostJob;
