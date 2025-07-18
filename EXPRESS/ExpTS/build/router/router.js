"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_1 = __importDefault(require("../controllers/main"));
const produto_1 = __importDefault(require("../controllers/produto"));
const router = express_1.default.Router();
router.get("/", main_1.default.index);
router.get("/lorem/:pagraphs", main_1.default.loremParagraphs);
router.get("/hb1", main_1.default.hb1);
router.get("/hb2", main_1.default.hb2);
router.get("/hb3", main_1.default.hb3);
router.get("/hb4", main_1.default.hb4);
// Controlador Produto
router.get('/produto', produto_1.default.index);
router.get('/produto/create', produto_1.default.create);
router.post('/produto/create', produto_1.default.create);
router.get('/produto/update/:id', produto_1.default.update);
router.post('/produto/update/:id', produto_1.default.update);
router.get('/produto/:id', produto_1.default.read);
router.post('/produto/:id', produto_1.default.remove);
exports.default = router;
