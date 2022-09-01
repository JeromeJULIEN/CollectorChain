const express = require('express');

const router = express.Router();

const propertyController = require('../../controllers/propertyController');

const controllerHandler = require('../../helper/controllerHandler');

router.get('/property', controllerHandler(propertyController.getAllProperties));

module.exports = router;
