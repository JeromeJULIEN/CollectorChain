module.exports = class ValidationError extends Error {
    constructor(message, infos) {
        super(message);
        this.name = 'ValidationError';
        this.infos = infos;
    }
};
