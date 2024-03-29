"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const express_1 = __importDefault(require("express"));
// import router from '../router/router';
const router = require('../router/router');
const app = (0, express_1.default)();
app.use(router);
app.listen(3000, () => {
    console.log("Express app iniciada na porta 3000.");
});
// const router = express.Router();
// router.get('/:num', (req: Request, res: Response)=>{
//     const num = parseInt(req.params.num,10);
//     let loremIpsumText = 'Lorwm ipsu dolor sit amet, consectetur adipiscing elit...';
//     let respondeText = loremIpsumText.repeat(num);    
//     res.send(respondeText);
// });
// module.exports = router;
