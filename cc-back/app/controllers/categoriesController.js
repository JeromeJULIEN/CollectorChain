const { Category } = require('../models');

module.exports = {
    async getAllCategories(req, res) {
        const categories = await Category.findAll();
        res.json(categories);
    },

    async createCategorie(req, res) {
        const newCategorie = {
            name: req.body.name,
            description: req.body.description,
            media: req.body.media,
        };
        const addCategorie = await Category.create(newCategorie);
        return res.json(addCategorie);
    },

    async deleteCategorie(req, res) {
        await Category.deleteById(req.params.id);
        return res.json('Categorie deleted !!');
    },
};
