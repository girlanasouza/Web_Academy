"use strict";
// const express = require("express");
// require("dotenv").config();
// const app = express();
// const PORT = process.env.PORT || 3333;
// app.get("/", (req, res) => {
//     res.send("Hello world!");
// });
// app.listen(PORT, () => {
//     console.log(`Express app iniciada na porta ${PORT}.`);
// });
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3333;
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});
