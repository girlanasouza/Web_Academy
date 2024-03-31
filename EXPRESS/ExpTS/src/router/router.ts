import express, { Router } from 'express'

import mainController from '../controllers/main';

export const router: Router = express.Router();

router.get("/", mainController.index);

router.get("/lorem/:pagraphs", mainController.loremParagraphs)

router.get("/hb1", mainController.hb1);

router.get("/hb2", mainController.hb2);

router.get("/hb3", mainController.hb3);

router.get("/hb4", mainController.hb4);