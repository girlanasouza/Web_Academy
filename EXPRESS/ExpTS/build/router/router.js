"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const main_1 = __importDefault(require("../controllers/main"));
exports.router = express_1.default.Router();
exports.router.get("/", main_1.default.index);
exports.router.get("/lorem/:pagraphs", main_1.default.loremParagraphs);
exports.router.get("/hb1", main_1.default.hb1);
exports.router.get("/hb2", main_1.default.hb2);
exports.router.get("/hb3", main_1.default.hb3);
exports.router.get("/hb4", main_1.default.hb4);
