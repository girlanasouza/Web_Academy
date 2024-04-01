import { Request, Response, response } from "express";
import { Produto, CreateProdutoDto, UpdateProdutoDto } from "../types/produto";

const index = async (req:Request, res: Response) => {
    try {
        const response = await fetch(`${process.env.URL_DB}/produtos`);
        const produtos: Produto[] = await response.json();
        res.render("produto/index", { produtos });
    } catch (err) {
        console.log(err);
    }
};

const create = async (req: Request, res: Response) => {

    if (req.method === 'GET'){
        res.render('produto/create');
    } else {
        const produto = req.body as CreateProdutoDto;
        try {
            await fetch(`${process.env.URL_DB}/produtos`, {
                method: 'POST',
                body: JSON.stringify(produto),
            });
            res.redirect("/produto");
        } catch (err){
            console.log(err);
        }
        
    }
};

const read = async (req:Request, res: Response) => {
    const { id } = req.params;
    try {
        const response = await fetch(`${process.env.URL_DB}/produtos/${id}`);
        const produto : Produto = await response.json();
        res.render("produto/view", {produto});
    } catch (err) {
        console.log(err);
    }
};

const update = async (req: Request, res:Response) => {
    const { id } = req.params;
    if (req.method === 'GET') {
        const response = await fetch(`${process.env.URL_DB}/produtos/${id}`);
        const produto : Produto = await response.json();
        res.render('produto/update', { produto });
    }
    else {
        const produtoAtualizado = req.body as UpdateProdutoDto;
        try {   
            fetch(`${process.env.URL_DB}/produtos/${id}`, {
                method: 'PUT',
                body: JSON.stringify(produtoAtualizado),
            })
            .then(response => response.json())
            .then((data) => {
                res.redirect(`/produto/${id}`);
            });
            
        } catch (err) {
            console.log(err);
        }
    }
};

const remove = async (req: Request, res: Response) => {
    const {id} = req.params;

    try {
        await fetch(`${process.env.URL_DB}/produtos/${id}`, {
            method: 'DELETE'
        })
        res.redirect("/produto")
    } catch(err) {
        console.log(err);
    }
};

export default {index, read, create, update, remove}