const express = require('express');
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();

module.exports = {

    /* Sign up
    async insertNewUser(req, res) {
         const newUser = req.body;
         
         const addUser = await User.createUser(newUser);
         return res.json(addUser);
     },*/

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
