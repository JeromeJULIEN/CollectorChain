const express = require('express');

const router = express.Router();

const tagController = require('../../controllers/tagController');

const controllerHandler = require('../../helper/controllerHandler');

/**
 * GET /tag
 * @summary Route to all tags
 * @tags tag
 * @param {string} tableName - tag table name
 * @return {Object} 200 - success response - application/json
 */
router.get('/tag', controllerHandler(tagController.getAllTag));

module.exports = router;
