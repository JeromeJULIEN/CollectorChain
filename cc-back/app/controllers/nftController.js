const { Nft } = require('../models');

module.exports = {
    async getNft(req, res) {
        const nft = await Nft.findAll();
        res.json(nft);
    },
};
