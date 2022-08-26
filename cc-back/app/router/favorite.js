const express = require('express');

const router = express.Router();

const favoriteController = require('../controllers/favoriteController');

router.get('/favorite/:id', favoriteController.getAllFavorite);
router.post('/favorite/:id', favoriteController.addFavorite);
router.delete('/favorite/:id', favoriteController.deleteFavorite);

module.exports = router;
