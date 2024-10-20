// backend/controllers/jobController.js
const Job = require('../models/Job');

const postJob = async (req, res) => {
    try {
        const { title, description, experienceLevel, endDate } = req.body;
        const job = new Job({ title, description, experienceLevel, endDate, companyId: req.user.id });
        await job.save();
        res.status(201).json({ message: 'Job posted successfully', job });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const sendJobUpdates = async (req, res) => {
    // Send job updates to candidates using Nodemailer
};

module.exports = { postJob, sendJobUpdates };
