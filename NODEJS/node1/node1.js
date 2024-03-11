
/* 

*/
const http = require('http');

const files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt']

const server = http.createServer(function(req,res){
    const directory = process.argv[2];
    fs.readdir(directory, function(err, files) {
        if (err) {
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.end(`Erro ao ler o diretório: ${err}`);
            return;
        }
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        files.forEach(file => {
            res.write(`${file}<br>`) 
        });
        res.end();
    });
});

const port = 3333;
server.listen(port, function() {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});