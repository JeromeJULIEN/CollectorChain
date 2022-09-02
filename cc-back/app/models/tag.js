const client = require('../clients/pg');
const CoreDatamapper = require('./coreDatamapper');

module.exports = class Tag extends CoreDatamapper {
    static tableName = 'tag';

    static async create(newTag) {
        const result = await client.query(
            `INSERT INTO "tag" (name) 
             VALUES ($1) 
             RETURNING *
            `,
            [
                newTag.name,
            ],
        );
        return result.rows[0];
    }
};
