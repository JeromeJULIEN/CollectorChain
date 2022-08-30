const { Favorite } = require('../models');

module.exports = {
    async getAllFavorite(req, res) {
        const favorite = await Favorite.getFavoriteById(req.params.id);
        res.json(favorite);
    },

    async addFavorite(req, res) {
        const nftId = req.body.nft_id;
        await Favorite.addFavoriteNft(req.params.id, nftId);

        res.json('Favoris ajouté');
    },

    async deleteFavorite(req, res) {
        const nftId = req.params.id_nft;
        const userId = req.params.id_user;

        await Favorite.deleteFavoriteNft(userId, nftId);

        res.json('Favoris supprimé !');
    },
};
