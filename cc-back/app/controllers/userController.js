const bcrypt = require('bcrypt');
const { User } = require('../models');
const jwt = require('../Auth/jwt');
const ApiError = require('../errors/apiError');

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
        const newUser = {
            nickname: req.body.nickname,
            email: req.body.email,
            password: req.body.password,
        };
        const user = await User.findUserByEmail(newUser.email);
        if (user) throw new ApiError('Cet email existe déjà !', { statusCode: 400 });
        // teste si les mots de passes sont correct
        if (newUser.password !== req.body.passwordConfirm) throw new ApiError('Mot de passe incorrect', { statusCode: 400 });
        /* Password encryption */
        const hashedPassword = await bcrypt.hash(newUser.password, 12);
        newUser.password = hashedPassword;
        const addUser = await User.createUser(newUser);
        // on teste si le nouvel utilisateur existe déjà
        if (newUser === addUser) throw new ApiError('Cet utilisateur existe déjà!', { statusCode: 400 });

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

        if (user) return res.json('Hello user!');
        if (password) return res.json();

        return res.json(user);
    },

    // Pour supprimer le profil user
    async deleteUser(req, res) {
        const user = req.body;
        const userDelete = await User.findUserByEmail(user);
        return res.json(userDelete);
    },

    // pour modifier ses infos perso sur la page profil
    async updateUserProfile(req, res) {
        const user = await User.findById(req.params.id);

        if (req.body.nickname) {
            user.nickname = req.body.nickname;
        }
        if (req.body.email) {
            user.email = req.body.email;
        }
        if (req.body.password) {
            if (req.body.password === req.body.passwordConfirm) {
                user.password = await bcrypt.hash(req.body.password, 12);
            }
        }
        if (req.body.wallet) {
            user.wallet = req.body.wallet;
        }
        if (req.body.media) {
            user.media = req.body.media;
        }

        const updateProfil = await User.updateUser(user);

        return res.json(updateProfil);
    },

    async forgetUserPage(req, res) {
        return res.send('Route mot de passe oublié');
    },

};
