import Joi from "joi";

export const schema = Joi.object().keys({
    nome: Joi.string().min(3).max(100).required(),
    preco: Joi.number().required(),
    estoque: Joi.number().integer().required()
});
