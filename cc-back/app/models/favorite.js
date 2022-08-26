const client = require('../clients/pg');
const CoreDatamapper = require('./coreDatamapper');

module.exports = class Favorite extends CoreDatamapper {
    static tableName = 'favorite';

    static async getFavoriteById(id) {
        const result = await client.query(
            `SELECT nft.* FROM "favorite"
            JOIN "nft" ON nft_id = nft.id
            WHERE user_id = $1
            `,
            [id],
        );
        return result.rows;
    }

    static async addFavoriteNft(id) {
        const result = await client.query(
            `INSERT INTO "favorite" (user_id, nft_id) VALUES
            ($1,$2);
            `,
            [id, id],
        );
        return result.rows;
    }

    static async deleteFavoriteNft(id) {
        const result = await client.query(
            `DELETE FROM "favorite"
            WHERE user_id = $1 AND nft_id = $2
            `,
            [id, id],
        );
        return result.rows;
    }
};
