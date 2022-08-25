const client = require('../clients/pg');
const CoreDatamapper = require('./coreDatamapper');

module.exports = class Nft extends CoreDatamapper {
    static tableName = 'nft';
};
