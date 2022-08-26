const express = require('express');

const router = express.Router();

const favoriteController = require('../controllers/favoriteController');
const controllerHandler = require('../helper/controllerHandler');

router.get('/favorite/:id', controllerHandler(favoriteController.getAllFavorite));
router.post('/favorite/:id', controllerHandler(favoriteController.addFavorite));
router.delete('/favorite/:id', controllerHandler(favoriteController.deleteFavorite));

module.exports = router;
