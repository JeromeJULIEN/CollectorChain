const nodemailer = require('nodemailer');

async function forgottenPassword(userEmail) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.MAIL,
            pass: process.env.PASSWORD,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        },
    });

    const mailOptions = {
        from: 'test@gmail.com',
        to: userEmail,
        subject: 'Récupération mot de passe provisoire',
        text: 'That was easy!',
    };

    transporter.sendMail(mailOptions, (err, success) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Email sent: ${success.response}`);
        }
    });
}

module.exports = forgottenPassword;
