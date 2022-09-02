const express = require('express');

const router = express.Router();

const userController = require('../../controllers/userController');
const controllerHandler = require('../../helper/controllerHandler');

const { userCreate } = require('../../validation/schemas/user');
const validation = require('../../validation/validator');

/**
 * POST /sign_up
 * @summary Post to sign up a new user
 * @tags User
 * @param {string} nickname.query - user pseudo
 * @param {string} email.query - user email
 * @param {string} password.query - user password
 * @return {User} 200 - success response - application/json
 */
router.post('/sign_up', validation('body', userCreate), controllerHandler(userController.insertNewUser));

module.exports = router;
