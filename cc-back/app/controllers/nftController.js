const { Nft } = require('../models');

module.exports = {
    async getNft(req, res) {
        const nft = await Nft.findAll();
        res.json(nft);
    },

    async getNftByCollectionId(req, res) {
        const collections = await Nft.getByCollectionId(req.params.id);
        return res.json(collections);
    },

    async getNftByUserId(req, res) {
        const nft = await Nft.getByNftId(req.params.id);
        return res.json(nft);
    },

    async createNft(req, res) {
        const newNft = {
            token: req.body.token,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            forSale: req.body.forSale,
            media: req.body.media,
            collection_id: req.body.collection_id,
            creator_id: req.body.creator_id,
            owner_id: req.body.owner_id,
            rarity: req.body.rarity,
        };
        const addNft = await Nft.create(newNft);
        return res.json(addNft);
    },

    async deleteNft(req, res) {
        await Nft.deleteById(req.params.id);
        return res.json('Nft deleted !!');
    },
};
