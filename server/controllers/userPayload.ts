const Joi = require('joi');

export const userpayload = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    gender: Joi.string().required(),
});

export const loginpayload = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required()
});

export const updateUserpayload = Joi.object().keys({
    firstName: Joi.string().allow('').default(''),
    lastName: Joi.string().allow('').default(''),
    email: Joi.string().allow('').default(''),
    phoneNumber: Joi.string().allow('').default(''),
    gender: Joi.string().allow('').default(''),
});


// export default {userpayload, loginpayload}