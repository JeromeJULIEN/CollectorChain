// const bcrypt = require('bcrypt');
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

    /**
     *
     * @typedef {object} newUser
     * @property {string} nickname
     * @property {string} email
     * @property {string} password
     */
    static async createUser(newUser) {
        const result = await client.query(
            `INSERT INTO "user" (nickname, email, password) 
             VALUES ($1, $2, $3);
            `,
            [newUser.nickname, newUser.email, newUser.password],
        );
        return result.rows[0];
    }

    static async deleteUserById(id) {
        const result = await client.query(
            `
            DELETE FROM "user"
            WHERE id = $1
            `,
            [id],
        );
        return result.rows[0];
    }

    static async updateUser(user) {
        const result = await client.query(
            `
            UPDATE "user"
            SET 
                "nickname" = $1,
                "email" = $2,
                "password" = $3,
                "wallet" = $4, 
                "media" = $5
                
            WHERE id = $6;
        `,

            [
                user.nickname,
                user.email,
                user.password,
                user.wallet,
                user.media,
                user.id,
            ],
        );
        return result.rows[0];
    }
};
