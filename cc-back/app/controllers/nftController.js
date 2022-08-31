const { Nft } = require('../models');
const ApiError = require('../errors/apiError');

// SELECT nft.*,
// array_agg(property.name) as property,
// array_agg(tag.name) as tag,
// "creator".nickname as creator,
// "owner".nickname as owner
// FROM "nft"
// FULL JOIN "nft_has_property_has_tag" ON "nft_has_property_has_tag"."nft_id" = "nft"."id"
// FULL JOIN "property" ON "property"."id" = "nft_has_property_has_tag"."property_id"
// FULL JOIN "tag" ON "tag"."id" = "nft_has_property_has_tag"."tag_id"
// JOIN "user" "creator" on "creator".id = nft.creator_id
// JOIN "user" "owner" on "owner".id = nft.owner_id
// WHERE "nft".id IS NOT NULL
// GROUP BY nft.id, "creator".nickname, "owner".nickname

module.exports = {
    async getNft(req, res) {
        let nft;
        if (req.query.limit) {
            nft = await Nft.findAllNftLimit(req.query.limit);
        } else {
            nft = await Nft.findAllNft();
        }
        res.json(nft);
    },
    async getNftById(req, res) {
        const nft = await Nft.findById(req.params.id);
        res.json(nft);
    },

    async getNftByCollectionId(req, res) {
        let collections;
        if (req.query.limit) {
            collections = await Nft.getByCollectionIdLimit(req.params.id, req.query.limit);
        } else {
            collections = await Nft.getByCollectionId(req.params.id);
        }
        return res.json(collections);
    },

    async getNftByUserId(req, res) {
        let nft;
        if (req.query.limit) {
            nft = await Nft.getByNftIdLimit(req.params.id, req.params.limit);
        } else {
            nft = await Nft.getByNftId(req.params.id);
        }
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

    async updateNft(req, res) {
        const nft = await Nft.findById(req.params.id);
        if (!nft) throw new ApiError("Ce NFT n'existe pas", { statusCode: 404 });
        const newNft = req.body;
        Object.entries(nft).forEach(([key]) => {
            if (!newNft[key]) newNft[key] = nft[key];
        });
        const updateNft = await Nft.update(newNft);
        return res.json(updateNft);
    },
};
