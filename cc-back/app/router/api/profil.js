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
 * @param {User} updateProfil - structure User object from User model
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
router.delete('/profil/:id', controllerHandler(userController.deleteProfilUser));
/**
 * UPDATE /profil/:id/update
 * @summary Route to update user
 * @tags user
 * @param {User} updateProfil - structure User object from User model
 * @return {Object} 200 - success response - application/json
 */
router.patch('/profil/:id', validation('body', updateProfil), controllerHandler(userController.updateUserProfile));

module.exports = router;
