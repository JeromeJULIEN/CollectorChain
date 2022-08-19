const express = require('express');

const router = express.Router();
const jwtModules = require('../Auth/jwt');
const homePageController = require('../controllers/homePageController');

const homepageRouter = require('./homePage');
const signUpRouter = require('./sign_up');
const loginRouter = require('./login');

router.use(homepageRouter);
router.use(signUpRouter);
router.use(loginRouter);

router.get('/posts', jwtModules.authenticateToken, homePageController.displayHomePage);
router.post('/token', jwtModules.refreshToken);
router.post('/logout', jwtModules.deleteRefreshToken);

module.exports = router;
