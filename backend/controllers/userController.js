// backend/controllers/userController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const registerUser = async (req, res) => {
    try {
        const { companyName, email, password, mobile } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ companyName, email, password: hashedPassword, mobile });
        await user.save();
        sendVerificationEmail(user.email);
        res.status(201).json({ message: 'User registered. Please verify your email.' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const sendVerificationEmail = async (email) => {
    // Configure your email service here
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
    
    const verificationLink = `http://localhost:5000/api/users/verify/${email}`;
    
    await transporter.sendMail({
        to: email,
        subject: 'Email Verification',
        html: `<p>Please verify your email by clicking the link: <a href="${verificationLink}">Verify Email</a></p>`,
    });
};

const verifyUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        if (!user) return res.status(404).json({ error: 'User not found' });
        user.isVerified = true;
        await user.save();
        res.status(200).json({ message: 'User verified' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { registerUser, verifyUser };

