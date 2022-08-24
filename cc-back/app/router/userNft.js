const express = require('express');

const router = express.Router();

const userNftController = require('../controllers/userNftController');

router.get('/:id/nft', userNftController.userNftPage);

module.exports = router;
