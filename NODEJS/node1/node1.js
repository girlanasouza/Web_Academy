/* Deixei em apenas duas funções pois pelo que eu entendi as partes faziam 
conjunto incremental do resultado gerado :)
*/

/* PARTE 1*/
const http = require('http');
const dotenv = require("dotenv")
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

require('dotenv').config();

const PORT = process.env.PORT || 3333;
const fs = require('fs');

const server = http.createServer(function(req,res){
    const directory = process.argv[2];
    fs.readdir(directory, function(err, files) {
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        files.forEach(file => {
            res.write(`${file}<br>`); 
        });
        res.end();
    });
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