const express = require('express');

const router = express.Router();

const userController = require('../../controllers/userController');
const controllerHandler = require('../../helper/controllerHandler');

/**
 * GET /forget_user
 * @summary Route to forget_user
 * @param {string} mail - user email
 */
router.get('/forget_user', controllerHandler(userController.resetMail));
/**
 * POST /forget_user
 * @summary Route to forget_user
 * @param {string} mail - user email
 * @return {string} 200 - success response - application/json
 */
router.post('/forget_user', controllerHandler(userController.resetMail));

module.exports = router;
