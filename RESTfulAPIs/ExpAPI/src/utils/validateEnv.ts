import { cleanEnv, port, str } from "envalid";

function validateEnv(){
    cleanEnv(process.env, {
        PORT: port(),
        NODE_ENV: str(),
        DEFAULT_LANG: str()
    })
}

export default validateEnv;