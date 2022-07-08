const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(express.json());

/* Fonction pemrettant de désactiver la sécurité CORS */
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
    next();
});

app.post('/', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER_ID,
            pass: process.env.MAIL_USER_MDP
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: process.env.MAIL_USER_ID,
        subject: `Message from ${req.body.email}`,
        text: req.body.firstName + ' ' + req.body.lastName + ',' + req.body.message
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.log(err);
        } else {
            console.log(info.response);
        }
    })
})

module.exports = app;