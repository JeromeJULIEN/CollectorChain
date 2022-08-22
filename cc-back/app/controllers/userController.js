const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const jwt = require('../Auth/jwt');

require('dotenv').config();

module.exports = {
    /**
     * User controller for add a new user
     * @param {object} request - Express request object
     * @param {object} respobse - Express response object
     * @returns Roue API JSON response
     */
    // On vérifie si les champs sont vides
    // Sign up
    async insertNewUser(req, res) {
        const fieldForm = false;
        for (const value in req.body) {
            const { body } = req;
            if (!body[value]) {
                return res.json({ error: 'Un champ est n\'est pas rempli' });
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
    /**
     * User controller to login user
     * @param {object} request - Express request object
     * @param {object} response - Express response object
     * @returns Route API JSON response
     */
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

    async greetingUser(req, res) {
        const { email, password } = req.body;
        const user = await User.findUserByEmail(email);

        if (user) return res.json('Hello user');
        if (password) return res.json();
    },
};
