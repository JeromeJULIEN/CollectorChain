const express = require('express');

const router = express.Router();
const jwtModules = require('../Auth/jwt');
const homePageController = require('../controllers/homePageController');

const homepageRouter = require('./homePage');
const signUpRouter = require('./sign_up');
const loginRouter = require('./login');
const profilRouter = require('./profil');
const forgetUserRouter = require('./forgetUser');
const eventsRouter = require('./events');
const collectionsRouter = require('./collections');
const collectionRouter = require('./collection');
const categoriesRouter = require('./categories');
const categoriesCollectionRouter = require('./categoriesCollection');
const collectionsNftRouter = require('./collectionsNft');
const showcaseUserRouter = require('./showcaseUser');
const nftRouter = require('./nft');
const userNftRouter = require('./userNft');
const favUserRouter = require('./favUser');

router.use(homepageRouter);
router.use(signUpRouter);
router.use(loginRouter);
router.use(profilRouter);
router.use(forgetUserRouter);
router.use(eventsRouter);
router.use(collectionsRouter);
router.use(collectionRouter);
router.use(categoriesRouter);
router.use(categoriesCollectionRouter);
router.use(collectionsNftRouter);
router.use(showcaseUserRouter);
router.use(nftRouter);
router.use(userNftRouter);
router.use(favUserRouter);

router.get('/posts', jwtModules.authenticateToken, homePageController.displayHomePage);
router.post('/token', jwtModules.refreshToken);
router.post('/logout', jwtModules.deleteRefreshToken);

module.exports = router;
