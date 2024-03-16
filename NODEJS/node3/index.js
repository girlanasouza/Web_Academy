import { LoremIpsum } from "lorem-ipsum";

import dotenv from "dotenv";

import http from "http";

import fs from 'fs/promises';

dotenv.config({path:`.env.${process.env.NODE_ENV}`});

const PORT = process.env.PORT || 3333;

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

const  server = http.createServer(async function (req, res) {
    
    const file = await fs.readFile("./public/index.html");
    
    if (req.url.includes('=')) {
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        let numParagrafos = parseInt(req.url.split('=')[1]);

        if (!numParagrafos) {
            numParagrafos = 0;
        }
        
        let texto = lorem.generateParagraphs(numParagrafos) || " ";

        const paragrafosHtml = texto.split('\n').map(p => `<p>${p}</p>`).join('');
        const fileContent = file.toString().replace("{{lorem}}", paragrafosHtml);
        res.write(fileContent);
    }
    else if (req.url.includes(".js")) {
        const file = await fs.readFile(`./public${req.url}`);
        res.writeHead(200, {"Content-Type": "text/js; charset=utf-8"});
        res.write(file);
    }
    else if (req.url.includes(".css")) {
        const file = await fs.readFile(`./public${req.url}`);
        res.writeHead(200, {"Content-Type": "text/css; charset=utf-8"});
        res.write(file);
    }
    else {
        const file = await fs.readFile("./public/index.html");
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.write(file);
    }

    res.end();
});
server.listen(PORT);
