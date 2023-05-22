const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(compression());


/* Fonction permettant d'envoyer un mail à partir des infos du formulaire de contact */
app.post('/', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: process.env.MAIL_USER_ID,
            pass: process.env.MAIL_USER_MDP
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        },
    })

    const mailOptions = {
        from: req.body.email,
        to: process.env.MAIL_USER_ID,
        subject: `Message from ${req.body.email}`,
        text: `
        Nom : ${req.body.lastName} 
        Prénom : ${req.body.firstName}

        Message : ${req.body.message}
        
        Numéro de Téléphone : ${req.body.phoneNumber}`
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            res.status(400).json(err)
        } else {
            console.log(info.response);
            res.status(200).json({message: 'E-mail bien envoyé !'})
        }
    })
})

module.exports = app;