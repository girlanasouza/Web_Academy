import dotenv from "dotenv";
import router from "./router";
import cookieParser from "cookie-parser";

import { v4 as uuidv4 } from "uuid";
import session from "express-session";

import validateEnv from "./utils/validateEnv";
import express, {Response, Request} from "express";
import { setLangCookie } from "./midlewares/setLangCookie";


dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT || 4444;

app.use(cookieParser());
app.use(session({
    genid: () => uuidv4(),
    secret: "StMf#She#mj34se#dSm",
    resave: true,
    saveUninitialized: true
    
}));
app.use(setLangCookie);
app.use(express.json());
app.use(router);

app.listen(PORT, ()=>{
    console.log(`Express app iniciada na porta ${PORT}.`);
})