// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         const directory = process.argv[2] || '.';
//         fs.readdir(directory, (err, files) => {
//             if (err) {
//                 res.writeHead(500, { 'Content-Type': 'text/plain' });
//                 res.end('Erro ao ler o diretorio');
//                 return;
//             }
//             let fileList = '<ul>';
//             files.forEach(file => {
//                 fileList += `<li>${file}</li>`;
//             });
//             fileList += '</ul>';
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(`<h1>Conteúdo do diretorio ${directory}</h1>${fileList}`);
//         });
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Página não encontrada');
//     }
// });

// const port = 3333;
// server.listen(port, () => {
//     console.log(`Servidor rodando em http://localhost:${port}/`);
// });

const http = require('http');

const files = ['file1.tx', 'file2.tx', 'file3.tx']


const server = http.createServer(function(req,res){
 res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
 res.write("Instituto de Computação");
 res.end();
});
server.listen(3333);