import { UsuarioDto } from "../usuario/usuario.types";
import { PrismaClient, Usuario } from "@prisma/client";
import { LoginDto } from "./auth.types";
import { compare } from "bcryptjs";


const prisma = new PrismaClient();

export const checkAuth =  async (credenciais : LoginDto): Promise<UsuarioDto | null> => {
    const usuario = await prisma.usuario.findUnique({where: { email: credenciais.email}});

    if (!usuario) return null;
    const ok = await compare(credenciais.senha, usuario.senha);
    if (!ok) return null;

    return {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        tipoUsuarioId: usuario.tipoUsuarioId,
        createdAt: usuario.createdAt,
        updatedAt: usuario.updatedAt
    } as UsuarioDto
}