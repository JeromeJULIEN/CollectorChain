const { Collection } = require('../models');

module.exports = {
    async getAllCollections(req, res) {
        const collections = await Collection.findAll();
        res.json(collections);
    },

    async getCollectionById(req, res) {
        const collection = await Collection.findById(req.params.id);
        res.json(collection);
    },

    async createCollection(req, res) {
        const newCollection = {
            name: req.body.name,
            description: req.body.description,
            media: req.body.media,
            category_id: req.body.category_id,
        };
        const addCollection = await Collection.create(newCollection);
        return res.json(addCollection);
    },

    async deleteCollection(req, res) {
        await Collection.deleteById(req.params.id);
        return res.json('Collection deleted !!');
    },

    async getCollectionByCategoryId(req, res) {
        const collections = await Collection.getByCategoriesId(req.params.id);
        return res.json(collections);
    },
};
