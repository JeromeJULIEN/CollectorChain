// const bcrypt = require('bcrypt');
const client = require('../clients/pg');
const CoreDatamapper = require('./coreDatamapper');

// const saltRounds = 10;

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

    // async createUser(newUser) {
    //     try {
    //         /* check if the new user is already registered */
    //         const isUniqueChecking = await client.query(
    // `SELECT * FROM "user" WHERE email= '${newUser.email}';`
    // );
    //         if (isUniqueChecking.rows.length !== 0) {
    //             const message = { message: 'Cet utilisateur est déjà enregistré' };
    //             return message;
    //         }

    //         /* Password encryption */
    //         const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);

    //         /* insert into database new user */
    //         await client.query(`
    //         INSERT INTO "user" (nickname, email, password)
    //         VALUES ('${newUser.nickname}', '${newUser.email}', '${hashedPassword}');
    //         `);
    //         const result = await client.query(
    // `SELECT * FROM "user" WHERE email= '${newUser.email}';`
    // );
    //         return result.rows[0];
    //     } catch (error) {
    //         return error;
    //     }
    // },

    // async loginUser(user) {
    //     try {
    //         /* check if the user is already registered */
    //         const isUniqueChecking = await client.query(
    // `SELECT * FROM "user" WHERE email= '${user.email}';`
    // );
    //         if (isUniqueChecking.rows.length === 0) {
    //             const message = { message: 'Cet utilisateur n\'est pas enregistré' };
    //             return message;
    //         }
    //         const result = await client.query(`
    //             SELECT * FROM "user" WHERE email= '${user.email}';
    //         `);
    //         /* Password checking */
    //         const passwordChecking = await bcrypt.compare(
    // `${user.password}`, `${result.rows[0].password}`
    // );

    //         if (passwordChecking !== true) {
    //             const message = 'Mauvaise combinaison adresse email / Mot de passe!';
    //             return { message, loggedIn: passwordChecking };
    //         }
    //         const message = 'Utilisateur connecté';
    //         return { userData: result.row[0], message, loggedIn: passwordChecking };
    //     } catch (error) {
    //         return error;
    //     }
    // },
};
