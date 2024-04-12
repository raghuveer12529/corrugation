const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Use bodyParser to parse JSON in POST requests
app.use(bodyParser.json());
app.use(cors());

// Set up a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'raghu.veer12529@gmail.com', // Replace with your Gmail address
    pass: 'lult mmfc nhwz axpy' // Replace with your Gmail password or generate an app-specific password
  }
});

// Define a route to send emails
app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;
  console.log("req",req.body); // Log the request body instead of the request object
  // Create an email message
  const mailOptions = {
    from: 'raghu.veer12529@gmail.com',
    to: to,
    subject: subject,
    text: text
  };
  console.log("mailOptions", mailOptions)

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("SOMETHING IS FISHY", JSON.stringify(error))
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
