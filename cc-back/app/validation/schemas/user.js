const Joi = require('joi');

const userCreate = Joi.object({

    email: Joi.string()
        .pattern(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$/)
        .required(),

    nickname: Joi.string()
        .required(),

    password: Joi.string()
        .required(),

    passwordConfirm: Joi.ref('password'),

    wallet: Joi.number()
        .positive(),

    isAdmin: Joi.boolean(),

    media: Joi.string(),
});

const userLogin = Joi.object({
    email: Joi.string()
        .pattern(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$/)
        .required(),

    password: Joi.string()
        .required(),
});

const profilId = Joi.object({
    id: Joi.number().required(),
});

module.exports = { userCreate, userLogin, profilId };
