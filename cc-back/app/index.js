const express = require('express');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:5173',
};

const router = require('./router');

const app = express();

app.use(cors(corsOptions));
// app.use(bodyParser.none());

// On active le middleware pour parser le payload JSON
app.use(express.json());
// On active le middleware pour parser le payload urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(router);

module.exports = app;
