
import { Request, Response } from 'express';
import { CreateUserDTO, TypeUser } from './usuario.types';
import { TipoUsuario, Usuario } from '@prisma/client';
import { createUsuario } from './usuario.service';
import { StatusCodes } from 'http-status-codes';

const index = async (req:Request, res: Response) => {}
const create = async (req:Request, res: Response) => {

    const user = req.body as Usuario;

    const typeUser = req.query.tipoUsuario as TypeUser;

    try{
        const newUser = await createUsuario(user, typeUser);
        res.status(StatusCodes.OK).json(newUser);
    }catch(e){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}
const read = async (req:Request, res: Response) => {}
const update = async (req:Request, res: Response) => {}
const remove = async (req:Request, res: Response) => {}

export default { index, create, read, update, remove};