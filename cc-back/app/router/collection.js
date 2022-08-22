const express = require('express');

const router = express.Router();

const collectionsController = require('../controllers/collectionController');

router.get('/collection', collectionsController.collectionPage);

module.exports = router;
