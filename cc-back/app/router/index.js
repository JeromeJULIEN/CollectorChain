const express = require('express');

const router = express.Router();

const homepageRouter = require('./homePage');
const signUpRouter = require('./sign_up');
// const logingRouter = require('./login');

router.use(homepageRouter);
router.use(signUpRouter);
// router.use(loginRouter);

module.exports = router;
