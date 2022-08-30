const client = require('../clients/pg');
const CoreDatamapper = require('./coreDatamapper');

module.exports = class Favorite extends CoreDatamapper {
    static tableName = 'favorite';

    static async getAllFavorite(id) {
        const result = await client.query(
            `SELECT * FROM "favorite"
            WHERE user_id = $1
            `,
            [id],
        );
        return result.rows;
    }

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

    static async addFavoriteNft(userId, nft) {
        const favoryQuery = [];
        nft.forEach(async (value) => {
            const query = client.query(
                `INSERT INTO "favorite" (user_id, nft_id) VALUES
                ($1,$2);
                `,
                [
                    userId,
                    value,
                ],
            );
            favoryQuery.push(query);
        });
        await Promise.all(favoryQuery);
    }

    static async deleteFavoriteNft(userId, nft) {
        const result = await client.query(
            `DELETE FROM "favorite"
            WHERE user_id = $1 AND nft_id = $2
            `,
            [
                userId,
                nft,
            ],
        );
        return result.rows;
    }
};
