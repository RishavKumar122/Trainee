const Joi = require('joi');


const create = Joi.object().keys({
    Title: Joi.string().required(),
    Author: Joi.string().required(),
    category_of_book: Joi.string().required(),
    author_email: Joi.string().required()

});

module.exports = {create}