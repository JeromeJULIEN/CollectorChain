const express = require('express');

const router = express.Router();

const categoriesCollectionController = require('../controllers/categoriesCollectionController');

router.get('/categories/collections', categoriesCollectionController.categoriesCollectionPage);

module.exports = router;
