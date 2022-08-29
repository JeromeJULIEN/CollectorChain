const express = require('express');
const path = require('path');
const cors = require('cors');
const errorHandler = require('./helper/errorHandler');
const ApiError = require('./errors/apiError');

const corsOptions = {
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 'https://collector-chain.herokuapp.com'],
};

const router = require('./router');

const app = express();

app.use(cors(corsOptions));

// On active le middleware pour parser le payload JSON
app.use(express.json());
// On active le middleware pour parser le payload urlencoded
app.use(express.urlencoded({ extended: true }));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../../cc-front/dist')));

// api calls
app.get('/api', (req, res) => {
    // use secret api keys with process.env.MY_SECRET_FAKE_API_KEY
    res.json({ message: 'I shouldn\'t be showing you this' });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../cc-front/dist', 'index.html'));
});

app.use(router);

app.use((req, res, next) => {
    next(new ApiError('endpoint not found', { statusCode: 404 }));
});

app.use(errorHandler);

module.exports = app;
