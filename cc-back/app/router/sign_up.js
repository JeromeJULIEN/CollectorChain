const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.get('sign_up').get(userController.loginUser);

router.route('/sign_up').post(userController.insertNewUser);

router.route('sign_up').post(userController.loginUser);

module.exports = router;
