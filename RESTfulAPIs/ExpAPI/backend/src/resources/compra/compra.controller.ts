import { Request, Response } from "express";

import { registrarCompra } from "./compra.servise";

function addProdutoCarrinho (req:Request, res: Response) {
    const { id } = req.params;
    if (!req.session.carrinhoCompras) req.session.carrinhoCompras=[];
    req.session.carrinhoCompras.push(id);
    res.status(201).json({msg: "Item add ao carrinho de compra!!!"})
}

async function finalizarCompra (req:Request, res: Response) {
    if (!req.session.uid) return res.status(400).json({msg: "Usuário não logado!!!"});
    if (!req.session.carrinhoCompras) return res.status(400).json({msg: "Carrinho Vazinho!!!"});

    try {
        await registrarCompra(req.session.carrinhoCompras, req.session.uid);
        res.status(201).json({msg: "Compra finalizada!!!"});
    }catch (err){
        res.status(500).json(err);
    }
   

}   


export default {addProdutoCarrinho, finalizarCompra}