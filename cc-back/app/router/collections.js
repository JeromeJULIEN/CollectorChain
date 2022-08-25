const express = require('express');

const router = express.Router();

const collectionsController = require('../controllers/collectionsController');

router.get('/collections', collectionsController.getAllCollections);
router.get('/collection/:id', collectionsController.getCollectionById);
router.post('/collection/:id', collectionsController.getCollectionById);
router.delete('/collection/:id', collectionsController.getCollectionById);
router.patch('/collection/:id', collectionsController.getCollectionById);

module.exports = router;
