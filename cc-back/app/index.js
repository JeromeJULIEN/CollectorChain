const express = require('express');

const multer = require('multer');

const bodyParser = multer();
const cors = require('cors');

const router = require('./router');

const app = express();

app.use(cors());
app.use(bodyParser.none());

// On active le middleware pour parser le payload JSON
app.use(express.json());
// On active le middleware pour parser le payload urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(router);

module.exports = app;
