const client = require('../clients/pg');
const CoreDatamapper = require('./coreDatamapper');

module.exports = class Nft extends CoreDatamapper {
    static tableName = 'nft';

    static async getByCollectionId(id) {
        const result = await client.query(
            `SELECT * FROM "nft" 
            WHERE "collection_id" = $1
            `,
            [id],
        );
        return result.rows;
    }

    static async getByNftId(id) {
        const result = await client.query(
            `SELECT * FROM "nft"
            WHERE "creator_id" = $1
            `,
            [id],
        );
        return result.rows;
    }

    static async create(newNft) {
        const result = await client.query(
            `INSERT INTO "nft" (token, name, description, price, forSale, media, collection_id, creator_id, owner_id, rarity) 
             VALUES ($1, $2, $3, $4, $5 ,$6, $7, $8, $9, $10) 
             RETURNING *
            `,
            [
                newNft.token,
                newNft.name,
                newNft.description,
                newNft.price,
                newNft.forSale,
                newNft.media,
                newNft.collection_id,
                newNft.creator_id,
                newNft.owner_id,
                newNft.rarity,
            ],
        );
        return result.rows[0];
    }
};
