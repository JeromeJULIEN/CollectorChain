const express = require('express');

const router = express.Router();

const categoriesController = require('../controllers/categoriesController');

const controllerHandler = require('../helper/controllerHandler');

router.get('/categories', categoriesController.getAllCategories);
router.post('/categories', controllerHandler(categoriesController.createCategorie));
router.delete('/categories/:id', categoriesController.deleteCategorie);
// router.patch('/categories', categoriesController.categoriesPage);

module.exports = router;
