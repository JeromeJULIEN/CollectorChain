const express = require('express');

const router = express.Router();

const favoriteController = require('../controllers/favoriteController');

router.get('/favorite/:id', favoriteController.getAllFavorite);
/*
router.post('/favoris/:id', favUserController.favorisUserPage);
router.delete('/favoris/:id', favUserController.favorisUserPage);
*/
module.exports = router;
