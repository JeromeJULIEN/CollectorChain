const { Nft } = require('../models');

module.exports = {
    async getAllFavorite(req, res) {
        const favorite = await Nft.findById(req.params.id);
        res.json(favorite);
    },
};
