const express = require('express');
const user = require('../models/user');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {

    async insertNewUser(req, res) {
        const newUser = req.body;
        const addUser = await user.createUser(newUser);
        return res.json(addUser);
    },

    async loginUser(req, res) {
        const user = req.body;

        /* Create a token at login */
        function generateAccessToken(user) {
            return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1800s' });
        }

        /* Check the generate token */
        function authenticateToken(token) {
            return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        }

        const userLogin = await user.loginUser(user);

        if (userLogin.loggedIn == true) {
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
        return res.send({ user: userLogin, message: userLogin.message });
    },
};
