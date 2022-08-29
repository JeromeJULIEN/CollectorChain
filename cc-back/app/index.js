const express = require('express');
const cors = require('cors');
const errorHandler = require('./helper/errorHandler');
const ApiError = require('./errors/apiError');

const corsOptions = {
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 'https://collector-chain.herokuapp.com'],
};

const router = require('./router');

const app = express();

app.use(express.static('client/build'));

app.use(cors(corsOptions));

// On active le middleware pour parser le payload JSON
app.use(express.json());
// On active le middleware pour parser le payload urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use((req, res, next) => {
    next(new ApiError('endpoint not found', { statusCode: 404 }));
});

app.use(errorHandler);

module.exports = app;
