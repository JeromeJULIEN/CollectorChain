module.exports = {
    async categoriesPage(req, res) {
        return res.send('Route vers une catégorie');
    },

    async categoriesCollectionPage(req, res) {
        return res.send('Router vers une collection d\'une catégorie');
    },
};
