const client = require('../clients/pg');
const CoreDatamapper = require('./coreDatamapper');

// /**
//  * @typedef {object} User
//  * @property {number} id - Primary key
//  * @property {string} email
//  * @property {string} nickname
//  * @property {string} password - encrypted
//  * @property {number} wallet - actual state of the personnal wallet
//  * @property {boolean} isAdmin - egal true if this user is an admin
//  * @property {string} media - link to user picture
//  */

module.exports = class User extends CoreDatamapper {
    static tableName = 'user';

    /**
     * find all user data from email
     * @param {string} email
     * @returns every user data from email
     */
    static async findUserByEmail(email) {
        const result = await client.query(
            'SELECT * FROM "user" WHERE email = $1',
            [email],
        );
        return result.rows[0];
    }
};
