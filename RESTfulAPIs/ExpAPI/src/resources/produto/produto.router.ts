import { Router } from "express";
import { produtoSchema } from "./produto.schemas";
import { validateBody } from "../../midlewares/validateBody";
import produtoController from "./produto.controller";


const router = Router();

router.get('/', produtoController.index);
router.post('/', validateBody(produtoSchema), produtoController.create);
router.get('/:id', produtoController.read);
router.put('/:id', validateBody(produtoSchema), produtoController.update);
router.delete('/:id', produtoController.remove);

export default router;