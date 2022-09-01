const client = require('../clients/pg');
const CoreDatamapper = require('./coreDatamapper');

module.exports = class Property extends CoreDatamapper {
    static tableName = 'property';

    static async getByPropertyId(id) {
        const result = await client.query(
            `SELECT * FROM "property"
          WHERE "id" = $1
          `,
            [id],
        );
        return result.rows;
    }

    static async getByPropertyIdLimit(id, limit) {
        const result = await client.query(
            `SELECT * FROM "property"
          WHERE "id" = $1
          LIMIT $2
          `,
            [id, limit],
        );
        return result.rows;
    }
};
