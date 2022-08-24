const express = require('express');

const router = express.Router();

const collectionNftController = require('../controllers/collectionNftController');

router.get('/collection/nft', collectionNftController.collectionNftPage);

module.exports = router;
