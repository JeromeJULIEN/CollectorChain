const express = require('express');
// const jwt = require('jsonwebtoken');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();

module.exports = {
    // On vérifie si les champs sont vides
    // Sign up
    async insertNewUser(req, res) {
        let fieldForm = false;
        console.log(req.body);
        for (const value in req.body) {
            const body = req.body;
            console.log(value);
            console.log(body[value]);
            if (!body[value]) {
                fieldForm = true;
            }
        }
        // eslint-disable-next-line max-len
        const newUser = { nickname: req.body.nickname, email: req.body.email, password: req.body.password };
        // on vérifie le pseudo du User
        if (newUser.nickname.length === 0) return res.json({ error: 'Veuillez saisir un pseudo' });
        // si le mail n'est pas dans le bon format
        if (!emailValidator.validate(req.body.email)) return res.json({ error: 'Email non valide' });
        const user = await User.findUserByEmail(newUser.email);
        if (user) return res.json({ error: 'Cet email existe déjà !' });
        // teste si les mots de passes sont correct
        if (newUser.password !== req.body.passwordConfirm) return res.json({ error: 'Mot de passe incorrect' });
        /* Password encryption */
        const hashedPassword = await bcrypt.hash(newUser.password, 12);
        newUser.password = hashedPassword;
        const addUser = await User.createUser(newUser);
        // on teste si le nouvel utilisateur existe déjà
        if (newUser === addUser) return res.json({ error: 'Cet utilisateur existe déjà!' });

        return res.json(newUser);
    },

    // Login
    async loginUser(req, res) {
        const { email, password } = req.body;

        // /* Create a token at login */
        // function generateAccessToken(user) {
        //     return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1800s' });
        // }

        // /* Check the generate token */
        // function authenticateToken(token) {
        //     return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        // }
        const user = await User.findUserByEmail(email);

        if (!user) return res.json({ error: 'L\'utilisateur n\'existe pas' });

        const userPassword = await bcrypt.compare(password, user.password);

        if (!userPassword) return res.json({ error: 'Mot de passe incorrect' });

        delete user.password;

        return res.json(user);

        /* if (userLogin.loggedIn == true) {
            const accessToken = generateAccessToken(user);
            const checkToken = authenticateToken(accessToken);

            return res.send({
                user: userLogin.userData,
                message: userLogin.message,
                accessToken,
                checkToken: {
                    // eslint-disable-next-line max-len
                 nickname: checkToken.nickname, email: checkToken.email, iat: checkToken.iat, exp: checkToken.exp,
                },
            });
        }
        return res.send({ user: userLogin, message: userLogin.message }); */
    },
};
