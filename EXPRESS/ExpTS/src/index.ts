// import express, { Request, Response } from "express";
// import dotenv from "dotenv";
// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 3333;
// app.get("/", (req: Request, res: Response) => {
//  res.send("Hello world!");
// });
// app.listen(PORT, () => {
//  console.log(`Express app iniciada na porta ${PORT}.`);
// });



// import express from 'express'
// import morgan from 'morgan'
// import dotenv from 'dotenv'
// import validateEnv from './utils/validateEnv';

// dotenv.config();
// const PORT = process.env.PORT || 3333
// const app = express()
// dotenv.config();
// validateEnv();

// app.use(morgan('short'))
// app.get("/",(req,res)=>{
//     res.send("Hello word!!");
// });

// app.listen(PORT, ()=>{
//     console.log(`Express app iniciada na porta ${PORT}.`)
// })

/*
Exercicio 5
*/

// import express, { Request, Response, NextFunction } from 'express';
// import fs from 'fs'
// import path from 'path'
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 3333;

// function logMiddleware(logFormat: 'simples' | 'completo') {
//   const logsDir = process.env.LOGS_DIR || './logs';
//   if (!fs.existsSync(logsDir)){
//     fs.mkdirSync(logsDir, { recursive: true });
//   }

//   return (req: Request, res: Response, next: NextFunction) => {
//     const logFileName = `${new Date().toISOString().split('T')[0]}.log`;
//     const logFilePath = path.join(logsDir, logFileName);

//     const logEntrySimple = `${new Date().toISOString()} - ${req.url} - ${req.method}\n`;
//     const logEntryComplete = `${new Date().toISOString()} - ${req.url} - ${req.method} - HTTP/${req.httpVersion} - ${req.get('User-Agent')}\n`;

//     const logEntry = logFormat === 'completo' ? logEntryComplete : logEntrySimple;

//     fs.appendFileSync(logFilePath, logEntry);

//     next();
//   };
// }
// app.use(logMiddleware('simples'));
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

/*
Exercicio 6
*/
import express from 'express';
import loremRouter from '../router/lorem'; 
const app = express();

app.use('/lorem', loremRouter);

app.listen(3000, () => {
    console.log("Express app iniciada na porta 3000.");
});
