const client = require('../clients/pg');
const CoreDatamapper = require('./coreDatamapper');

module.exports = class Tag extends CoreDatamapper {
    static tableName = 'tag';

    static async getByTagId(id) {
        const result = await client.query(
            `SELECT * FROM "tag"
          WHERE "id" = $1
          `,
            [id],
        );
        return result.rows;
    }

    static async getByTagIdLimit(id, limit) {
        const result = await client.query(
            `SELECT * FROM "tag"
          WHERE "id" = $1
          LIMIT $2
          `,
            [id, limit],
        );
        return result.rows;
    }
};