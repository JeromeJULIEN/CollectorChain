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
    let results = await Promise.all(categoryQueries);
    const categoryRows = results.map((result) => result.rows[0]);

    // Import collection
    const collectionQueries = [];
    collections.forEach((collection) => {
        const query = client.query(
            `
        INSERT INTO "collection"("name","description", "media", "category_id" ) VALUES
        ($1,$2,$3,
          SELECT id FROM "category" WHERE $4 = "category"."name"
          )
        RETURNING *
      `,
            [collection.name, collection.description, collection.media, collection.category_id],
        );
        collectionQueries.push(query);
    });
    results = await Promise.all(collectionQueries);

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
