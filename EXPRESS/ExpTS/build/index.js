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
const express_1 = __importDefault(require("express"));
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
(0, validateEnv_1.default)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3333;
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});
