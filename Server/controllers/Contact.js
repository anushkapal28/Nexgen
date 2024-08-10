const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');  
require('dotenv').config();

exports.sendContactForm = async (req, res) => {
    const { firstName, email, phoneNumber, services, message } = req.body;

    if (!firstName || !email || !phoneNumber || !message) {
        return res.status(400).json({ 
            success: false, 
            message: 'All fields are required' });
    }

    try {
        const contact = new Contact({ firstName, email, phoneNumber, services, message });
        await contact.save();

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,       
                pass: process.env.EMAIL_PASS   
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'apanupal28@gmail.com', 
            subject: `New Contact Form Submission from ${firstName}`,
            text: `You have a new message from ${firstName} (${email}, ${phoneNumber}):\n\n${message}\n\nServices: ${services}`
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: 'Your message has been sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Something went wrong, please try again later' });
    }
};
