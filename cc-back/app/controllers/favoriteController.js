const { Favorite } = require('../models');

module.exports = {
    async getAllFavorite(req, res) {
        const favorite = await Favorite.getFavoriteById(req.params.id);
        res.json(favorite);
    },

    async addFavorite(req, res) {
        const selectNft = await Favorite.addFavoriteNft(req.params.id);
        const addNft = selectNft;
        res.json(addNft);
    },

    async deleteFavorite(req, res) {
        const deleteNft = await Favorite.findById(req.params.id);
        res.json(deleteNft);
    },
};
