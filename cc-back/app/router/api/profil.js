const express = require('express');

const router = express.Router();

const userController = require('../../controllers/userController');
const controllerHandler = require('../../helper/controllerHandler');

const { profilId, updateProfil } = require('../../validation/schemas/user');
const validation = require('../../validation/validator');

/**
 * GET /profil/:id
 * @summary Route to get user
 * @tags user
 * @param {number} id - profil user by id
 * @return {string} 200 - success response - application/json
 */
router.get('/profil/:id', validation('params', profilId), controllerHandler(userController.getUser));
/**
 * DELETE /profil/:id/delete
 * @summary Route to delete user
 * @tags user
 * @param {number} id - profil user by id
 * @return {string} 200 - success response - application/json
 */
router.delete('/profil/:id/delete', controllerHandler(userController.deleteProfilUser));
/**
 * UPDATE /profil/:id/update
 * @summary Route to update user
 * @tags user
 * @param {number} id - user id
 * @param {string} email - user email
 * @param {string} nickname - user nickname
 * @param {string} password - user password
 * @param {number} wallet - user wallet
 * @param {string} media - user media
 * @param {string} name - user name
 * @param {string} lastname - user lastname
 * @return {Object} 200 - success response - application/json
 */
router.patch('/profil/:id/update', validation('body', updateProfil), controllerHandler(userController.updateUserProfile));

module.exports = router;
