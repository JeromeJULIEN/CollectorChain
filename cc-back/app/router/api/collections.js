const express = require('express');

const router = express.Router();

const collectionsController = require('../../controllers/collectionsController');

const controllerHandler = require('../../helper/controllerHandler');

router.get('/collections', controllerHandler(collectionsController.getAllCollections));
router.get('/collection/:id', controllerHandler(collectionsController.getCollectionById));
router.post('/collection', controllerHandler(collectionsController.createCollection));
router.delete('/collection/:id', controllerHandler(collectionsController.deleteCollection));
router.patch('/collection/:id', controllerHandler(collectionsController.updateCollection));

router.get('/categories/:id/collections', controllerHandler(collectionsController.getCollectionByCategoryId));

module.exports = router;
