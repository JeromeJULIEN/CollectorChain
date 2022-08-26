const express = require('express');

const router = express.Router();

const nftController = require('../controllers/nftController');
const controllerHandler = require('../helper/controllerHandler');

router.get('/nft', nftController.getNft);
router.post('/:id/nft', controllerHandler(nftController.createNft));
router.delete('/nft/:id/delete', nftController.deleteNft);
router.patch('/:id/nft/update', nftController.updateNft);

router.get('/collections/:id/nft', nftController.getNftByCollectionId);

router.get('/:id/nft', nftController.getNftByUserId);

module.exports = router;
