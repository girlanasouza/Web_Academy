import { Request, Response, NextFunction } from "express";
import { TiposUsuarios } from "../resources/tipoUsuario/tipoUsuario.constants";
import { StatusCodes } from "http-status-codes";

export const isAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.session.tipoUsuarioId === TiposUsuarios.ADMIN) next();
  else res.status(StatusCodes.FORBIDDEN).json({});
};
