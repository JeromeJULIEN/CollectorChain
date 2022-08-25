const client = require('../clients/pg');
const CoreDatamapper = require('./coreDatamapper');

module.exports = class Category extends CoreDatamapper {
    static tableName = 'category';
};
