import Joi from "joi";

export const produtoScheme = Joi.object().keys({
    nome: Joi.string().min(3).max(100).required(),
    preco: Joi.number().required(),
    estoque: Joi.number().integer().required()
})

const produto = {
    nome: "iphone86",
    preco: 4.5,
    estoque:500
}

const result = produtoScheme.validate(produto);
console.log(result)
