const express = require('express');

const router = express.Router();

const favoriteController = require('../../controllers/favoriteController');
const controllerHandler = require('../../helper/controllerHandler');

/**
 * GET /favorite/:id
 * @summary Route to favorite
 * @tags favorite
 * @param {number} id - user_id
 */
router.get('/favorite/:id', controllerHandler(favoriteController.getAllFavorite));
/**
 * POST /favorite/:id_user/:id_nft
 * @summary Route to add favorite nft
 * @tags favorite
 * @param {number} id - id from nft added
 * @param {number} id - id from user
 * @return {Object} 200 - success response - application/json
 */
router.post('/favorite/:id_user/:id_nft', controllerHandler(favoriteController.addFavorite));
/**
 * DELETE /favorite/:id_user/:id_nft
 * @summary Route to delete favorite nft
 * @tags favorite
 * @param {number} id - id from nft deleted
 * @param {number} id - id from user
 * @return {string} 200 - success response - application/json
 */
router.delete('/favorite/:id_user/:id_nft', controllerHandler(favoriteController.deleteFavorite));

module.exports = router;
