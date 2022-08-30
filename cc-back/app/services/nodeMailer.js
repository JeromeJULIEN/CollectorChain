const nodemailer = require('nodemailer');

async function sendEmail(userEmail, password) {
    const resetMail = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL,
            pass: process.env.PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.MAIL,
        to: userEmail,
        subject: 'Reset Password Link - Collector Chain',
        text: ` 
        Bonjour !
        Suite à votre demande, vous trouverez ci-joint le mot de passe
        lié à votre compte utilisateur : ${password}

        Cordialement.

        L'équipe Collector Chain
    `,
    };

    resetMail.sendEmail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log(info);
        }
    });
}

module.exports = sendEmail;
