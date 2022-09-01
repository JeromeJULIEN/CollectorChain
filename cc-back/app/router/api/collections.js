const express = require('express');

const router = express.Router();

const collectionsController = require('../../controllers/collectionsController');

const controllerHandler = require('../../helper/controllerHandler');

/**
 * GET /collections
 * @summary Route to all collections
 * @param {string} tableName - collection tableName
 */
router.get('/collections', controllerHandler(collectionsController.getAllCollections));
/**
 * GET /collection/:id
 * @summary Route to collection/:id
 * @param {number} id - collection by id
 */
router.get('/collection/:id', controllerHandler(collectionsController.getCollectionById));
/**
 * POST /collection
 * @summary Route to collection
 * @param {string} name - collection name
 * @param {string} description - collection description
 * @param {string} media - collection media
 * @param {number} category_id - collection by category_id
 * @return {Object} 200 - success response - application/json
 */
router.post('/collection', controllerHandler(collectionsController.createCollection));
/**
 * DELETE /collection/:id
 * @summary Route to collection/:id
 * @param {number} id - id from collection deleted
 * @return {string} 200 - success response - application/json
 */
router.delete('/collection/:id', controllerHandler(collectionsController.deleteCollection));
/**
 * UPDATE /collection/:id
 * @summary Route to collection/:id
 * @param {number} id - id from collection to update
 * @param {string} name - collection name
 * @param {string} description - collection description
 * @param {string} media - collection media
 * @param {number} category_id - collection by category_id
 * @return {Object} 200 - success response - application/json
 */
router.patch('/collection/:id', controllerHandler(collectionsController.updateCollection));
/**
 * GET /categories/:id/collections
 * @summary Route to /categories/:id/collections
 * @param {number} id - collections by category id
 */
router.get('/categories/:id/collections', controllerHandler(collectionsController.getCollectionByCategoryId));

module.exports = router;
