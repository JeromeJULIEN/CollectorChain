// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
    let statusCode;
    let message;
    if (err.name === 'ApiError') {
        statusCode = err.infos?.statusCode ?? 400;
        message = err.message;
    } else if (err.name === 'ValidationError') {
        statusCode = 400;
        message = err.message;
    } else {
        statusCode = 500;
        // message = 'Internal server error';
        message = err;
    }

    res.status(statusCode).json({ message });
};
