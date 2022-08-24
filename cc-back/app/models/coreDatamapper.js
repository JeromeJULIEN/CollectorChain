const client = require('../clients/pg');

module.exports = class CoreDatamapper {
    /**
     * query for find all table
     * @returns all in database contained in tableName
     */
    static async findAll() {
        const result = await client.query(`
            SELECT * FROM "${this.tableName}"
        `);
        return result.rows;
    }

    static async findById(id) {
        const result = await client.query(`
            SELECT * FROM "${this.tableName}"
            WHERE id = $1
        `,
        [id],
        );
        return result.rows[0];
    }
};
