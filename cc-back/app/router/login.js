const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
/**
 * POST /login
 * @summary Route to login a registered user
 * @tags user
 * @param {user} (request.body.required user information)
 * @return {user} 200 - success response - application/json
 */
router.post('/login', userController.loginUser);

module.exports = router;
