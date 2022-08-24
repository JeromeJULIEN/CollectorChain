const { Client } = require('pg');

const data = require('./dataTest.json');

const categories = data[0].category;
const collections = data[1].collection;
const nfts = data[2].nft;
const users = data[3].user;
const properties = data[4].property;
const tags = data[5].tag;
const { nftHasProperty } = data[6];

(async () => {
    const client = new Client('postgres://spedata:spedata@localhost/collector_chain');
    await client.connect();

    await client.query('TRUNCATE TABLE "favorite", "property_has_nft", "property", "tag", "nft", "user", "collection", "category" RESTART IDENTITY;');

    // Import catégories
    const categoryQueries = [];
    categories.forEach((category) => {
        const query = client.query(
            `
        INSERT INTO "category"("name","media") VALUES
        ($1,$2)
        RETURNING *
      `,
            [category.name, category.media],
        );
        categoryQueries.push(query);
    });
    await Promise.all(categoryQueries);

    // Import collection
    const collectionQueries = [];
    collections.forEach((collection) => {
        const query = client.query(
            `
        INSERT INTO "collection"("name","description", "media", "category_id" ) VALUES
        ($1,$2,$3,
          (SELECT id FROM "category" WHERE $4 = "category"."name")
          )
        RETURNING *
      `,
            [collection.name, collection.description, collection.media, collection.category_id],
        );
        collectionQueries.push(query);
    });
    await Promise.all(collectionQueries);

    // Import User
    const userQueries = [];
    users.forEach((user) => {
        const query = client.query(
            `
        INSERT INTO "user"("email","nickname", "password", "media" ) VALUES
        ($1,$2,$3,$4
          )
        RETURNING *
      `,
            [user.email, user.nickname, user.password, user.media],
        );
        userQueries.push(query);
    });
    userQueries.push(client.query(
        `
            INSERT INTO "user"("email","nickname", "password", "media" ) VALUES
            ($1,$2,$3,$4
            )
            RETURNING *
        `,
        ['user@user.com', 'user', '$2a$12$auKxh5o5M0wGHZ26GmPbJuzn8MHDVIl68a.sAwpuvgk215rwYH48C', 'https://via.placeholder.com/150'],
    ));
    await Promise.all(userQueries);

    // Import nft
    const nftQueries = [];
    nfts.forEach((nft) => {
        const query = client.query(
            `
        INSERT INTO "nft"(
            "token",
            "name",
            "description",
            "price",
            "forSale",
            "media",
            "collection_id",
            "creator_id",
            "owner_id",
            "rarity" )
        VALUES
        ($1,$2,$3,$4,$5,$6,
            (SELECT id FROM "collection" WHERE $7 = "collection"."name"),
            (SELECT id FROM "user" WHERE $8 = "user"."nickname"),
            (SELECT id FROM "user" WHERE $9 = "user"."nickname"),
            $10
            )
        RETURNING *
        `,
            [
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
        nftQueries.push(query);
    });
    await Promise.all(nftQueries);

    // Import tags
    const tagQueries = [];
    tags.forEach((tag) => {
        const query = client.query(
            `
        INSERT INTO "tag"("name") VALUES
        ($1)
        RETURNING *
        `,
            [tag.name],
        );
        tagQueries.push(query);
    });
    await Promise.all(tagQueries);

    // Import property
    const propertyQueries = [];
    properties.forEach((property) => {
        const query = client.query(
            `
        INSERT INTO "property"("name", "tag_id" ) VALUES
        ($1,
            (SELECT id FROM "tag" WHERE $2 = "tag"."name")
            )
        RETURNING *
        `,
            [property.name, property.tag_id],
        );
        propertyQueries.push(query);
    });
    await Promise.all(propertyQueries);

    // Import nftHasProperty
    const nftHasPropertyQueries = [];
    nftHasProperty.forEach((value) => {
        console.log(`${value.property_id} et ${value.nft_id}`);
        const query = client.query(
            `
        INSERT INTO "property_has_nft"("property_id", "nft_id" ) VALUES
        (
            (SELECT id FROM "property" WHERE $2 = "property"."name"),
            (SELECT id FROM "nft" WHERE $1 = "nft"."name")
            )
        RETURNING *
        `,
            [value.property_id, value.nft_id],
        );
        nftHasPropertyQueries.push(query);
    });
    await Promise.all(nftHasPropertyQueries);

    client.end();
})();

// await client.query('TRUNCATE TABLE category, post RESTART IDENTITY');
// const categoryQueries = [];

// categories.forEach((category) => {
//     debug('Processing category:', category.label);
//     const query = client.query(
//         `
//             INSERT INTO "category"
//             ("label", "route")
//             VALUES
//             ($1, $2)
//             RETURNING *
//         `,
//         [category.label, category.route],
//     );
//     categoryQueries.push(query);
// });

// const results = await Promise.all(categoryQueries);

// INSERT INTO "user"("email","nickname","password") VALUES
// ('user@user.com','user','$2a$12$auKxh5o5M0wGHZ26GmPbJuzn8MHDVIl68a.sAwpuvgk215rwYH48C');
