const express = require('express');

const router = express.Router();

const propertyController = require('../../controllers/propertyController');

const controllerHandler = require('../../helper/controllerHandler');

/**
 * GET /property
 * @summary Route to all property
 * @tags property
 * @param {string} tableName - property table name
 * @return {Object} 200 - success response - application/json
 */
router.get('/property', controllerHandler(propertyController.getAllProperties));

module.exports = router;
