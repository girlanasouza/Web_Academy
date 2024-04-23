import dotenv from "dotenv";
import router from "./router";
import cookieParser from "cookie-parser";
import validateEnv from "./utils/validateEnv";
import express, {Response, Request} from "express";
import { setLangCookie } from "./midlewares/setLangCookie";


dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT || 4444;

app.use(cookieParser());
app.use(setLangCookie);
app.use(express.json());
app.use(router);

app.listen(PORT, ()=>{
    console.log(`Express app iniciada na porta ${PORT}.`);
})