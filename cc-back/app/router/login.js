const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const controllerHandler = require('../helper/controllerHandler');

const { userLogin } = require('../validation/schemas/user');
const validation = require('../validation/validator');

router.post('/login', validation('body', userLogin), controllerHandler(userController.loginUser));

module.exports = router;
