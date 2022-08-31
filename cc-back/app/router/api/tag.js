const express = require('express');

const router = express.Router();

const tagController = require('../../controllers/tagController');

const controllerHandler = require('../../helper/controllerHandler');

router.get('/tag', controllerHandler(tagController.getAllTag));

module.exports = router;
