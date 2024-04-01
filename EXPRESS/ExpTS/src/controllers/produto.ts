import { Request, Response } from "express";
import { Produto } from "../types/produto";

const index = async (req:Request, res: Response) => {
    const response = await fetch(`${process.env.URL_DB}/produtos`);
    const baseUrl = process.env.URL_DB; // Isso deve resultar em "http://localhost:3355"
    const produtos : Produto[] = await response.json();
    res.render("produto/index", { produtos });

};

const create = async (req: Request, res: Response) => {
    if (req.method === 'GET'){
        res.render('produto/')
    }
};

const read = async (req:Request, res: Response) => {
    const {id} = req.params;
    res.end(id);
};

const update = async (req: Request, res:Response) => {};

const remove = async (req: Request, res: Response) => {};

export default {index, read, create, update, remove}