const { Category } = require('../models');

module.exports = {
    async getAllCategories(req, res) {
        const categories = await Category.findAll();
        res.json(categories);
    },
};
