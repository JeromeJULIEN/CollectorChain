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

    static async update(category) {
        const result = await client.query(
            `
            UPDATE "category"
            SET 
                "name" = $2,
                "description" = $3,
                "media" = $4

            WHERE id = $1
            RETURNING *
        `,

            [
                category.id,
                category.name,
                category.description,
                category.media,
            ],
        );
        return result.rows[0];
    }
};
