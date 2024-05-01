import { TiposUsuarios } from "../src/resources/tipoUsuario/tipoUsuario.constants";

import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const seed = async () => {  
    await prisma.tipoUsuario.createMany({
        data: [
            { id: TiposUsuarios.ADMIN, rotulo: "admin" },
            { id: TiposUsuarios.CLIENT, rotulo: "client" },
        ],
    })
}


seed().then(async () => {
    await prisma.$disconnect();
})
.catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
});