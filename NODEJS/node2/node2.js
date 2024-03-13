

const stringUtils = require("./src/utils/string")
const constroiLinks = require("./src/utils/links")
const http = require('http');
const dotenv = require("dotenv")
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

require('dotenv').config();

const PORT = process.env.PORT || 3333;
const fs = require('fs');
const string = require("./src/utils/string");

const server = http.createServer(function(req,res){
    const directory = process.argv[2];
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    if (req.url == '/') {
        fs.readdir(directory, function(err, files) {    
            files.forEach(file => {
                // res.write(`${stringUtils}`)
                constroiLinks.constroiLinks(files.toString());
                res.write(`${file}<br>`); 
            });
            
        });
        
    } else if (req.url.include('favicon')){
        res.end();

    } else {
        readFile(path, (err,data) => {
            if (err) throw new Error(err);
            res.end(data.toString());
             
        })
        // ler o conteudo do arquivo utilizando readFile(path)
        // 
    }

    res.end();
});

server.listen(PORT);

/* PARTE 2*/

// const http = require('http');
// require('dotenv').config();

// const PORT = process.env.PORT || 3333;

// const server = http.createServer(function (req, res) {
//     res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
//     res.write("Instituto de Computação");
//     res.end();
// });

// server.listen(PORT);

/* PARTE 6
QUANDO O USUARIO CLICAR NO LINK VAI ABRIR O CONTEUDO DO ARQUIVO

*/
