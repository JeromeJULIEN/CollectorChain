const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.post('/sign_up', userController.insertNewUser);

module.exports = router;
