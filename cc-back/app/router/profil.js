const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const controllerHandler = require('../helper/controllerHandler');

const { userLogin } = require('../validation/schemas/user');
const validation = require('../validation/validator');

// eslint-disable-next-line max-len
router.get('/profil', validation('body', userLogin), controllerHandler(userController.greetingUser));
router.get('/profil', userController.greetingUser);
router.get('/profil/delete', userController.deleteUser);
router.get('/profil/update', userController.updateUser);

module.exports = router;
