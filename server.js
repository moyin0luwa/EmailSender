const express = require('express')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 3000


app.listen(PORT,() => {
    console.log(`EmailSender is listening at http://localhost:${PORT}`)
})


// Here we cofigure our nodemailer
const nodemailer = require('nodemailer')
// creating our transporter object
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });


// Creating the mail to be sent
let mailOptions = {
    from: 'moyin.oladipo@gmail.com',
    to: 'm.oladips@gmail.com',
    subject: 'Nodemailer Project',
    text: 'Hi from your nodemailer project'
  };


//   Then we send the mail
  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });