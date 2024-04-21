import { Router } from "express";
import { schema } from "./produto.schemas";
import { validateBody } from "../../midlewares/validateBody";
import produtoController from "./produto.controller";


const router = Router();

router.get('/', produtoController.index);
router.post('/', validateBody(schema), produtoController.create);
router.get('/:id', produtoController.read);
router.put('/:id', validateBody(schema), produtoController.update);
router.delete('/:id', produtoController.remove);

export default router;