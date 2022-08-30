const express = require('express');

const router = express.Router();

const categoriesController = require('../../controllers/categoriesController');

const controllerHandler = require('../../helper/controllerHandler');

router.get('/categories', controllerHandler(categoriesController.getAllCategories));
router.post('/categories', controllerHandler(categoriesController.createCategorie));
router.delete('/categories/:id', controllerHandler(categoriesController.deleteCategorie));
router.patch('/categories/:id', controllerHandler(categoriesController.updateCategories));

module.exports = router;
