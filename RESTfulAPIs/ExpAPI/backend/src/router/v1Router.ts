import { Router } from "express";

import produtoRouter from "../resources/produto/produto.router";
import compraRouter from "../resources/compra/compra.router";
import languageRouter from "../resources/languages/language.router";
import authRouter from '../resources/auth/auth.router';
import userRouter from "../resources/usuario/usuario.router";


const router = Router();

router.use(
    "/produto", 
    // #swagger.tags = ['Produto']
    produtoRouter
);

router.use(
    "/compra",
    compraRouter
);

router.use(
    "/usuario", 
    // #swagger.tags = ['Usuario']
    userRouter
);
router.use("/language", languageRouter);
router.use(
    "/auth",
    // #swagger.tags = ['Auth']
    authRouter
);
export default router;