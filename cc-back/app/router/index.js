const express = require('express');

const router = express.Router();
const jwtModules = require('../Auth/jwt');
const homePageController = require('../controllers/homePageController');
const userController = require('../controllers/userController');

const homepageRouter = require('./homePage');
const signUpRouter = require('./sign_up');
const loginRouter = require('./login');
const profilRouter = require('./profil');

router.use(homepageRouter);
router.use(signUpRouter);
router.use(loginRouter);
router.use(profilRouter);

router.get('/posts', jwtModules.authenticateToken, homePageController.displayHomePage);
router.post('/token', jwtModules.refreshToken);
router.post('/logout', jwtModules.deleteRefreshToken);

router.get('./profil', userController.greetingUser);
router.delete('/profil/delete', userController.deleteUser);
router.patch('/profil/update', userController.updateUser);

module.exports = router;
