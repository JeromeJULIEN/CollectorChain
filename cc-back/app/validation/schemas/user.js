const Joi = require('joi');

const userCreate = Joi.object({

    email: Joi.string()
        .pattern(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$/)
        .required(),

    nickname: Joi.string()
        .required(),

    password: Joi.string().min(8)
        .required(),

    passwordConfirm: Joi.ref('password'),

    wallet: Joi.number()
        .positive().allow(0),

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

const updateProfil = Joi.object({

    email: Joi.string()
        .pattern(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$/),

    nickname: Joi.string(),

    password: Joi.string().required(),

    newPassword: Joi.string().min(8),

    newPasswordConfirm: Joi.ref('newPassword'),

    wallet: Joi.number()
        .positive().allow(0),

    isAdmin: Joi.boolean(),

    media: Joi.string(),

    name: Joi.string(),

    lastName: Joi.string(),

    isOpenToContact: Joi.boolean(),
});

module.exports = {
    userCreate, userLogin, profilId, updateProfil,
};
