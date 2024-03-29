import { Request, Response, Router } from 'express';
import { LoremIpsum } from "lorem-ipsum";

const router = Router();

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

router.get('/:paragraphs', (req: Request, res: Response) => {
    const nParagraphs: number = parseInt(req.params.paragraphs, 10);

    if (isNaN(nParagraphs) || nParagraphs <= 0) {
        return res.status(400).send("Por favor, forneça um número válido de parágrafos.");
    }

    let loremPars: string = "";
    for (let i = 0; i < nParagraphs; i++) {
        loremPars += "<p>" + lorem.generateParagraphs(1) + "</p>";
    }

    res.send(loremPars);
});

export default router;  