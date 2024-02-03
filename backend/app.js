const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Use bodyParser to parse JSON in POST requests
app.use(bodyParser.json());

// Set up a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com', // Replace with your Gmail address
    pass: 'your_password' // Replace with your Gmail password or generate an app-specific password
  }
});

// Define a route to send emails
app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  // Create an email message
  const mailOptions = {
    from: 'your_email@gmail.com',
    to,
    subject,
    text
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
