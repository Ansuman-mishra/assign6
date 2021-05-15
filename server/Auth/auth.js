const Joi = require("joi");

const authSchema = Joi.object().keys({
   name: Joi.string().min(3).max(10).required(),
   last: Joi.string().min(3).max(10).required(),
   phone: Joi.string().required().min(10),
   city: Joi.string().required().max(10),
   message: Joi.string().required().max(100),
});
module.exports = { authSchema };
