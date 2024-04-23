import { Request, Response } from "express";
import {ChangeLangDto} from "./language.types";

const changeLanguage = (req: Request, res: Response) => {
    const { lang } = req.body as ChangeLangDto;
    res.cookie('lang', lang);
    res.json({ lang });
}
export default { changeLanguage };