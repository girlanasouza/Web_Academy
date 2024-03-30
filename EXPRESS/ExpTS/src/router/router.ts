import express, { Router } from 'express'

import { home } from '../codes/home';
import { hb1 } from '../codes/hb1';
import { hb3 } from '../codes/hb3';
import { hb2 } from '../codes/hb2';
import { hb4 } from '../codes/hb4';
import {loremParagraphs} from '../codes/lorem'


export const router: Router = express.Router();

router.get("/", home);

router.get("/lorem/:pagraphs", loremParagraphs)

router.get("/hb1", hb1);

router.get("/hb2", hb2);

router.get("/hb3", hb3);

router.get("/hb4", hb4);