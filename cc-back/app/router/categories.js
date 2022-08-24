const express = require('express');

const router = express.Router();

const categoriesController = require('../controllers/categoriesController');

router.get('/categories', categoriesController.categoriesPage);
/*
router.post('/categories', categoriesController.categoriesPage);
router.delete('/categories', categoriesController.categoriesPage);
router.patch('/categories', categoriesController.categoriesPage);
*/

module.exports = router;
