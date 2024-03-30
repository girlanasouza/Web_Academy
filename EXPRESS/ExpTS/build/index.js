"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_handlebars_1 = require("express-handlebars");
const express_1 = __importDefault(require("express"));
const router_1 = require("./router/router");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3333;
app.engine("handlebars", (0, express_handlebars_1.engine)({
    helpers: require(`${__dirname}/views/helpers/helpers.ts`)
}));
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);
app.use(router_1.router);
app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}`);
});
