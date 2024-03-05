import express from 'express';

import router from './routes/index.js'
import db from './config/db.js'
// import path from 'path'
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

//import{resolve} from "path"
const app = express();

db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error));

//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar pug
app.set('view engine', 'pug')


//Obtener el año actual
// app.use((req, res, next) => {
//     const year = new Date();
//     res.locals.actualYear = year.getFullYear();
//     return next();
// })

//Agrega body parser para leer datos del formulario
app.use(express.urlencoded({extended: true}))

//Acceder archivos estaticos de express
app.use(express.static('public'));

//Agregar Router
app.use('/', router);



app.listen(port, () =>{
    console.log(`El servidor esta funcionando en el puerto: ${port}`);
})