const express = require('express');

const router = express.Router();

const userController = require('../../controllers/userController');
const controllerHandler = require('../../helper/controllerHandler');

router.get('/forget_user', controllerHandler(userController.resetMail));
router.post('/forget_user', controllerHandler(userController.resetMail));

module.exports = router;
