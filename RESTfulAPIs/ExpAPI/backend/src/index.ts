import dotenv from "dotenv";
import router from "./router";
import cookieParser from "cookie-parser";

import { v4 as uuidv4 } from "uuid";
import session from "express-session";

import validateEnv from "./utils/validateEnv";
import express, {Response, Request} from "express";
import { setLangCookie } from "./midlewares/setLangCookie";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger-output.json";


declare module "express-session" {
    interface SessionData{
        uid: string;
        tipoUsuarioId: string;
    }
}

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
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(PORT, ()=>{
    console.log(`Express app iniciada na porta ${PORT}.`);
})