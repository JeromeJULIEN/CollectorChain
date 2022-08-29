const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const controllerHandler = require('../helper/controllerHandler');

const { userCreate } = require('../validation/schemas/user');
const validation = require('../validation/validator');

/**
 * POST /sign_up
 * @summary Route to sign up a new user
 * @tags newUser
 * @param {newUser} (request.body.required newUser information)
 * @return {newUser} 200 - success response - application/json
 */
router.post('/sign_up', validation('body', userCreate), controllerHandler(userController.insertNewUser));

module.exports = router;
