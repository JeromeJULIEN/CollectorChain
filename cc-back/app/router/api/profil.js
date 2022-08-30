const express = require('express');

const router = express.Router();

const userController = require('../../controllers/userController');
const controllerHandler = require('../../helper/controllerHandler');

const { profilId, updateProfil } = require('../../validation/schemas/user');
const validation = require('../../validation/validator');

router.get('/profil/:id', validation('params', profilId), controllerHandler(userController.getUser));
router.delete('/profil/:id/delete', controllerHandler(userController.deleteProfilUser));
router.patch('/profil/:id/update', validation('body', updateProfil), controllerHandler(userController.updateUserProfile));

module.exports = router;
