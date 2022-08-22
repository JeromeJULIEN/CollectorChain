const express = require('express');

const router = express.Router();

const collectionsController = require('../controllers/collectionsController');

router.get('/collections', collectionsController.collectionsPage);

module.exports = router;
