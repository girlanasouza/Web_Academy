import { Request, Response } from "express";
import { CreateUserDTO, TypeUser, UsuarioDto } from "./usuario.types";
import { TipoUsuario, Usuario } from "@prisma/client";
import {
  createUsuario,
  indexUsuario,
  readUsuario,
  removeUsuario,
  updateUsuario,
} from "./usuario.service";

import { ReasonPhrases, StatusCodes } from "http-status-codes";

const index = async (req: Request, res: Response) => {
  try {
    const usuarios = await indexUsuario();
    return res.status(StatusCodes.OK).json(usuarios);
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({});
  }
};

const create = async (req: Request, res: Response) => {
  const user = req.body as Usuario;

  const typeUser = req.query.tipoUsuario as TypeUser;

  try {
    const newUser = await createUsuario(user, typeUser);
    res.status(StatusCodes.OK).json(newUser);
  } catch (e) {
    console.log(e);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
  }
};

const read = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const usuario = await readUsuario(id);
    res.status(StatusCodes.OK).json({ usuario });
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({});
  }
};
const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const usuario: UsuarioDto = req.body;
  try {
    const usuarioUpdate = await updateUsuario(id, usuario);
    usuarioUpdate
      ? res.status(StatusCodes.OK).json(updateUsuario)
      : res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
  }
};
const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedUsuario = await removeUsuario(id);
    res.status(StatusCodes.NO_CONTENT).json(deletedUsuario);
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
  }
};

export default { index, create, read, update, remove };
