import { PrismaClient, TipoUsuario, Usuario } from "@prisma/client";

import { CreateUserDTO, TypeUser, UsuarioDto } from "../usuario/usuario.types";

import { genSalt, hash } from "bcryptjs";

import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.constants";

const prisma = new PrismaClient();

export const createUsuario = async (
  usuario: Usuario,
  tipoUsuario: TypeUser
): Promise<UsuarioDto> => {
  const rounds = parseInt(process.env.BCRYPT_ROUDS!);
  const salt = await genSalt(rounds);
  const password = await hash(usuario.senha, salt);

  return await prisma.usuario.create({
    select: {
      id: true,
      nome: true,
      senha: false,
      email: true,
      tipoUsuarioId: true,
      createdAt: true,
      updatedAt: true,
    },
    data: {
      ...usuario,
      senha: password,
      tipoUsuarioId:
        tipoUsuario === "admin" ? TiposUsuarios.ADMIN : TiposUsuarios.CLIENT,
    },
  });
};

export const indexUsuario = async () => {
  return await prisma.usuario.findMany();
};
export const readUsuario = async (id: string) => {
  return await prisma.usuario.findUnique({ where: { id } });
};

export const updateUsuario = async (id: string, usuario: UsuarioDto) => {
  return await prisma.usuario.update({ where: { id }, data: usuario });
};

export const removeUsuario = async (id: string) => {
  return await prisma.usuario.delete({ where: { id } });
};
