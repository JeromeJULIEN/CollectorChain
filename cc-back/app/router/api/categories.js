const express = require('express');

const router = express.Router();

const categoriesController = require('../../controllers/categoriesController');

const controllerHandler = require('../../helper/controllerHandler');
/**
 * GET /categories
 * @summary Route to all categories
 * @param {string} tableName - category tableName
 */
router.get('/categories', controllerHandler(categoriesController.getAllCategories));
/**
 * POST /categories
 * @summary Route to categories
 * @param {string} name - category name
 * @param {string} description - category description
 * @param {string} media - category media
 * @return {Object} 200 - success response - application/json
 */
router.post('/categories', controllerHandler(categoriesController.createCategorie));
/**
 * DELETE /categories/:id
 * @summary Route to categories/:id
 * @param {number} id - id from category deleted
 * @return {categories} 200 - success response - application/json
 */
router.delete('/categories/:id', controllerHandler(categoriesController.deleteCategorie));
/**
 * UPDATE /categories/:id
 * @summary Route to categories
 * @param {number} id - id from category to update
 * @param {string} name - category name
 * @param {string} description - category description
 * @param {string} media - category media
 * @return {Object} 200 - success response - application/json
 */
router.patch('/categories/:id', controllerHandler(categoriesController.updateCategories));

module.exports = router;
