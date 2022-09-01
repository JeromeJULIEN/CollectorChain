const express = require('express');

const router = express.Router();

const nftController = require('../../controllers/nftController');
const controllerHandler = require('../../helper/controllerHandler');

router.get('/nft', controllerHandler(nftController.getNft));
router.get('/nft/:id', controllerHandler(nftController.getNftById));
router.post('/nft', controllerHandler(nftController.createNft));
router.delete('/nft/:id', controllerHandler(nftController.deleteNft));
router.patch('/nft/:id', controllerHandler(nftController.updateNft));

router.get('/collections/:id_collection/nft', controllerHandler(nftController.getNftByCollectionId));

router.get('/:id_user/nft', controllerHandler(nftController.getNftByUserId));

module.exports = router;
