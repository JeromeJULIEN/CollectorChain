const client = require('../clients/pg');
const CoreDatamapper = require('./coreDatamapper');

module.exports = class Category extends CoreDatamapper {
    static tableName = 'category';

    static async create(newCategorie) {
        const result = await client.query(
            `INSERT INTO "category" (name, description, media) 
             VALUES ($1, $2, $3) 
             RETURNING *
            `,
            [
                newCategorie.name,
                newCategorie.description,
                newCategorie.media,
            ],
        );
        return result.rows[0];
    }
};
