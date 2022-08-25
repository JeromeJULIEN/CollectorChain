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
        const user = await User.findUserByEmail(newUser.email);
        if (user) throw new ApiError('Cet email existe déjà !', { statusCode: 400 });
        const addUser = await User.createUser(newUser);
        // on teste si le nouvel utilisateur existe déjà
        if (newUser === addUser) throw new ApiError('Cet utilisateur existe déjà!', { statusCode: 400 });

        return res.json(newUser);
    },
};
