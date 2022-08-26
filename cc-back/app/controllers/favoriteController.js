const { Favorite } = require('../models');

module.exports = {
    async getAllFavorite(req, res) {
        const favorite = await Favorite.getFavoriteById(req.params.id);
        res.json(favorite);
    },

    async addFavorite(req, res) {
        const nftId = req.body.nft_id;
        // nftId.forEach(async (nft) => {
        // await Favorite.addFavoriteNft(req.params.id, nft);
        // });
        await Favorite.addFavoriteNft(req.params.id, nftId[0]);

        res.json('Favoris ajouté');
    },

    async deleteFavorite(req, res) {
        const nftId = await Favorite.getAllFavorite(req.params.id, req.body);
        console.log(nftId);

        // await Favorite.deleteById(req.params.id, nftId[0]);

        res.json('Favoris supprimé');
    },
};
