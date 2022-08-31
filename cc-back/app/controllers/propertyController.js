const { Property } = require('../models');

module.exports = {
    async getAllProperties(req, res) {
        let property;
        console.log(property);
        if (req.query.limit) {
            property = await Property.findAllLimit(req.query.limit);
            console.log(property);
        } else {
            property = await Property.findAll();
            console.log(property);
        }
        res.json(property);
        console.log(property);
    },
};
