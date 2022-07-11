const express = require('express');
const helmet = require('helmet');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(helmet());

/* Fonction pemrettant de désactiver la sécurité CORS */
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
    next();
});


/* Fonction permettant d'envoyer un mail à partir des infos du formulaire de contact */
app.post('/', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER_ID,
            pass: process.env.MAIL_USER_MDP,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: process.env.MAIL_USER_ID,
        subject: `Message from ${req.body.email}`,
        text: req.body.firstName + ' ' + req.body.lastName + ', ' + req.body.message
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.log(err);
            res.status(400).send()
        } else {
            console.log(info.response);
            res.status(200).send()
        }
    })
})

module.exports = app;