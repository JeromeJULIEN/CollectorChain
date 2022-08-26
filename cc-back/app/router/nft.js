const express = require('express');

const router = express.Router();

const nftController = require('../controllers/nftController');
const controllerHandler = require('../helper/controllerHandler');

router.get('/nft', controllerHandler(nftController.getNft));
router.post('/:id/nft', controllerHandler(nftController.createNft));
router.delete('/nft/:id/delete', controllerHandler(nftController.deleteNft));

router.get('/collections/:id/nft', controllerHandler(nftController.getNftByCollectionId));

router.get('/:id/nft', controllerHandler(nftController.getNftByUserId));

module.exports = router;
