const client = require('../clients/pg');
const CoreDatamapper = require('./coreDatamapper');

module.exports = class Collection extends CoreDatamapper {
    static tableName = 'collection';
};
