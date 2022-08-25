const client = require('../clients/pg');
const CoreDatamapper = require('./coreDatamapper');

module.exports = class Favorite extends CoreDatamapper {
    static tableName = 'favorite';

    static async getByNftId(id) {
        const result = await client.query(
            `SELECT * FROM "favorite" 
            WHERE "user_id" = $1
            `,
            [id],
        );
        return result.rows;
    }
};
