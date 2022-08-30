const nodemailer = require('nodemailer');

async function forgottenPassword(userEmail, password) {
    const transporter = nodemailer.createTransport({
        auth: {
            user: 'test',
            password: 'password',
        },
    });

    const mailDescription = {
        from: 'mailAdmin',
        to: userEmail,
        subject: 'Réinitialiser son mot de passe',
        text: `
                Bonjour !

                Suite à votre demande, vous trouverez ci-joint le mot de passe
                provisoire : ${password}, veuillez le changer lors de votre connexion dans votre profil.
                Cordialement.

                L'équipe Collector Chain
      `,
    };

    transporter.verify(mailDescription, (err, success) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Email sent successfully !');
        }
    });
}

module.exports = forgottenPassword;
