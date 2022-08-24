const express = require('express');

const router = express.Router();

const favUserController = require('../controllers/favorisUserController');

router.get('/favoris/:id', favUserController.favorisUserPage);
/*
router.post('/favoris/:id', favUserController.favorisUserPage);
router.delete('/favoris/:id', favUserController.favorisUserPage);
*/
module.exports = router;
