const express = require('express');

const multer = require('multer');

const bodyParser = multer();
const cors = require('cors');

// parse request body
// app.use(bodyParser.json());

// cors
// app.use((req, res) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
// });

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
