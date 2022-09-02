const express = require('express');

const router = express.Router();

const categoriesController = require('../../controllers/categoriesController');

const controllerHandler = require('../../helper/controllerHandler');
/**
 * GET /categories
 * @summary Get categories
 * @tags Categories
 * @param {Category} - Category Model Object
 * @param {string} name.query - category name
 * @param {string} description.query - category description
 * @param {string} media.query - category media
 * @return {Category} 200 - success response - application/json
 */
router.get('/categories', controllerHandler(categoriesController.getAllCategories));
/**
 * POST /categories
 * @summary Add new category
 * @tags Categories
 * @param {Category} - Category Model Object
 * @param {string} name.query - category name
 * @param {string} description.query - category description
 * @param {string} media.query - category media
 * @return {Category} 200 - success response - application/json
 */
router.post('/categories', controllerHandler(categoriesController.createCategorie));
/**
 * DELETE /categories/:id
 * @summary Delete categories/:id
 * @tags Categories
 * @param {number} id.query - id from category deleted
 * @return {categories} 200 - success response - application/json
 */
router.delete('/categories/:id', controllerHandler(categoriesController.deleteCategorie));
/**
 * UPDATE /categories/:id
 * @summary Modify categories
 * @tags Categories
 * @param {number} id.query - id from category to update
 * @param {string} name.query - category name
 * @param {string} description.query - category description
 * @param {string} media.query - category media
 * @return {Category} 200 - success response - application/json
 */
router.patch('/categories/:id', controllerHandler(categoriesController.updateCategories));

module.exports = router;
