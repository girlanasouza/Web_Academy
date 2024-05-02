import { Usuario } from "@prisma/client";

export type CreateUserDTO = Pick<Usuario, "nome" | "email" | "senha" >;
export type UsuarioDto = Omit<Usuario, "senha">;
export type TypeUser = "client" | "admin";