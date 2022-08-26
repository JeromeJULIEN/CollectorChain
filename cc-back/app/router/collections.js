const express = require('express');

const router = express.Router();

const collectionsController = require('../controllers/collectionsController');

const controllerHandler = require('../helper/controllerHandler');

router.get('/collections', collectionsController.getAllCollections);
router.get('/collection/:id', collectionsController.getCollectionById);
router.post('/collection', controllerHandler(collectionsController.createCollection));
router.delete('/collection/:id', collectionsController.deleteCollection);
router.patch('/collection/:id', collectionsController.updateCollection);

router.get('/categories/:id/collections', collectionsController.getCollectionByCategoryId);

module.exports = router;
