const express = require('express');

const router = express.Router();

const showcaseUserController = require('../controllers/showcaseUserController');

router.get('/showcase/:id', showcaseUserController.showcasePage);

module.exports = router;
