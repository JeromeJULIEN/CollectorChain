const express = require('express');

const router = express.Router();

const nftController = require('../controllers/nftController');

router.get('/nft', nftController.getNft);
router.post('/:id/nft', nftController.createNft);
router.delete('/nft/:id/delete', nftController.deleteNft);

router.get('/collections/:id/nft', nftController.getNftByCollectionId);

router.get('/:id/nft', nftController.getNftByUserId);

module.exports = router;
