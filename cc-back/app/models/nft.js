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

    static async getByCollectionIdLimit(id, limit) {
        const result = await client.query(
            `SELECT * FROM "nft" 
            WHERE "collection_id" = $1
            LIMIT $2
            `,
            [id, limit],
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

    static async getByNftIdLimit(id, limit) {
        const result = await client.query(
            `SELECT * FROM "nft"
            WHERE "creator_id" = $1
            LIMIT $2
            `,
            [id, limit],
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

    static async update(nft) {
        const result = await client.query(
            `
            UPDATE "nft"
            SET 
                "token" = $2,
                "name" = $3,
                "description" = $4,
                "price" = $5,
                "forsale" = $6,
                "media" = $7,
                "collection_id" = $8,
                "creator_id" = $9,
                "owner_id" = $10,
                "rarity" = $11
                
            WHERE id = $1
            RETURNING *
        `,

            [
                nft.id,
                nft.token,
                nft.name,
                nft.description,
                nft.price,
                nft.forSale,
                nft.media,
                nft.collection_id,
                nft.creator_id,
                nft.owner_id,
                nft.rarity,
            ],
        );
        return result.rows[0];
    }
};
