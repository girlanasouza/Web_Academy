import { Router } from "express";

import produtoRouter from "../resources/produto/produto.router";
import languageRouter from "../resources/languages/language.router";
import authRouter from '../resources/auth/auth.router';

const router = Router();

router.use("/produto", produtoRouter);
router.use("/language", languageRouter);
router.use("/auth", authRouter);
export default router;