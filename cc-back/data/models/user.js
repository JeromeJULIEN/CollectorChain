const CoreDatamapper = require('./coreDatamapper');

module.exports = class User extends CoreDatamapper {
    static tableName = 'user';
};
