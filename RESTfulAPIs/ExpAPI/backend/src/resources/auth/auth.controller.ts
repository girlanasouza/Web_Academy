import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { Request, Response } from "express";



const signup = async (req: Request, res: Response) => {
    const usuario = req.body;
    try {
        const newUsuario = await createUsuario(usuario, "client");
        res.status(201).json(newUsuario);
    } catch(e: any){
        res.status(500).json(e.errors);
    }
}

const login = async (req: Request, res: Response) => {
    const 
}