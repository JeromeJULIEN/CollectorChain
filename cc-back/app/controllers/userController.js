const bcrypt = require('bcrypt');
const { User } = require('../models');
const jwt = require('../Auth/jwt');

require('dotenv').config();

module.exports = {

    /* Sign up
    async insertNewUser(req, res) {
         const newUser = req.body;

         const addUser = await User.createUser(newUser);
         return res.json(addUser);
     }, */

    // Login
    async loginUser(req, res) {
        const { email, password } = req.body;
        const user = await User.findUserByEmail(email);

        if (!user) return res.json({ error: 'L\'utilisateur n\'existe pas' });

        const userPassword = await bcrypt.compare(password, user.password);

        if (!userPassword) return res.json({ error: 'Mot de passe incorrect' });

        delete user.password;
        delete user.created_at;
        delete user.updated_at;

        const token = jwt.createToken(user);
        const userLog = Object.assign(user, token);

        return res.json(userLog);
    },
};
