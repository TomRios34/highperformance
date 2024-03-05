import express from 'express'
import{resolve} from "path"
import {paginaInicio, paginaNosotros, paginaContacto, paginaDerechosReservados, paginaInformesCita} from '../controllers/paginaController.js'

import{
  guardarSuscriptor
} from '../controllers/suscriptorController.js'
// import path from 'path'
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);



const router = express.Router();

  router.get('/', paginaInicio)

 router.get('/Nosotros', paginaNosotros)

 router.get('/contacto', paginaContacto)

 router.get('/derechosReservados', paginaDerechosReservados)

 router.get('/informesCita', paginaInformesCita)

 router.post('/informesCita', guardarSuscriptor)

router.get('/imagen.css', (req, res) =>{
  res.sendFile(resolve("./public/imagen.css"))
})

router.get('/app.js', (req, res) =>{
  res.sendFile(resolve("./public/app.js"))
})

export default router;
