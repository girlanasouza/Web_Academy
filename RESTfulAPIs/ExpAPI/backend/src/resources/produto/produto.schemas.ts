import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const produtoSchema = Joi.object().keys({
    nome: Joi.string().min(3).max(100).required(),
    preco: Joi.number().required(),
    estoque: Joi.number().integer().required()
});

export const validateProductCreate = (req:  Request, res: Response, next: NextFunction) => {
    const {error} = produtoSchema.validate(req.body);
}