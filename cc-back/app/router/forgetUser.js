const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.get('/forget_user', userController.forgetUserPage);
router.post('/forget_user', userController.forgetUserPage);

module.exports = router;
