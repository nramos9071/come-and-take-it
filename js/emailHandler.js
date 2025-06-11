const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (name, email, message) => {
    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email service provider
        auth: {
            user: process.env.EMAIL_USER, // Your email address
            pass: process.env.EMAIL_PASS, // Your email password
        },
    });

    // Set up email data
    let mailOptions = {
        from: email, // Sender address
        to: 'recipient@example.com', // List of recipients
        subject: 'New Contact Form Submission', // Subject line
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Plain text body
    };

    // Send mail with defined transport object
    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending email: ', error);
    }
};

module.exports = sendEmail;