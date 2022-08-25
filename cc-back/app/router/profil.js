const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const controllerHandler = require('../helper/controllerHandler');

const { profilId } = require('../validation/schemas/user');
const validation = require('../validation/validator');

router.get('/profil/:id', validation('params', profilId), controllerHandler(userController.getUser));
router.delete('/profil/:id/delete', userController.deleteProfilUser);
router.patch('/profil/:id/update', userController.updateUserProfile);

module.exports = router;
