import { engine } from 'express-handlebars';
import express from 'express';
import {router} from './router/router';

const app = express();
const PORT = process.env.PORT || 3333;

app.engine("handlebars", engine({
  helpers: require(`${__dirname}/views/helpers/helpers.ts`)
}));

app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.use(router);

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}`);
});
