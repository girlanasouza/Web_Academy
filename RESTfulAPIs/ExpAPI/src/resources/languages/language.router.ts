import { Router } from "express";
import { validateBody } from "../../midlewares/validateBody";
import { languageSchema } from "./language.schemas";
import languageController from './language.controller';

const router = Router();

router.post('/', validateBody(languageSchema), languageController.changeLanguage);
// router.get('/change', languageController.changeLanguage);
export default router;