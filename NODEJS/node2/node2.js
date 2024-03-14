// Importações necessárias
const http = require('http');
const fs = require('fs');
const path = require('path');
const { createLink } = require('./utils/createLinks'); // Importa a função createLink do módulo utils.js

// Configuração do dotenv para ler variáveis de ambiente
const dotenv = require("dotenv");
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
require('dotenv').config();

const PORT = process.env.PORT || 3333;

// Criação do servidor HTTP
const server = http.createServer(function(req, res) {
    const directory = process.argv[2]; // Diretório informado via linha de comando

    // Verifica se está na raiz para listar arquivos ou em um arquivo específico para mostrar conteúdo
    if (req.url === '/') {
        fs.readdir(directory, function(err, files) {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/html;charset=utf-8"});
                res.end("Erro ao listar arquivos.");
                return;
            }

            res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
            files.forEach(file => {
                res.write(createLink(file)); // Certifique-se de que 'file' está definido corretamente
            });
            res.end();
        });
    } else {
        // Trata o caso de acessar um arquivo específico
        const filePath = path.join(directory, req.url);
        fs.readFile(filePath, function(err, data) {
            if (err) {
                res.writeHead(404, {"Content-Type": "text/html;charset=utf-8"});
                res.end("Arquivo não encontrado.");
                return;
            }

            res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
            res.write(data);
            // Adiciona um link para voltar à lista de arquivos
            res.write('<br><a href="/">Voltar</a>');
            res.end();
        });
    }
});

server.listen(PORT);
