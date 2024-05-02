import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { createUsuario } from "../usuario/usuario.service";
import { LoginDto } from "./auth.types";
import { checkAuth } from "./auth.service";

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
    const credenciais = req.body as LoginDto;
    try {
        const usuario = await checkAuth(credenciais);
        if (!usuario){ 
            return res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED)
        }
        else {
            req.session.uid = usuario.id;
            req.session.tipoUsuarioId = "";
            return res.status(StatusCodes.OK).json(ReasonPhrases.OK);
        }
    } catch(e: any) {
        res.status(500).json(e.errors);
    }
}

const logout = async (req: Request, res: Response) => {
    if (req.session.uid) {
        req.session.destroy(()=>{
            res.status(StatusCodes.OK).json(ReasonPhrases.OK);
        })
    } else {
        return res.status(StatusCodes.FORBIDDEN).json(ReasonPhrases.FORBIDDEN);
    }
}

export default {signup, login, logout}