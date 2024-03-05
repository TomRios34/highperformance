import{resolve} from "path"

const paginaInicio = (req, res) =>{
    res.sendFile(resolve("./public/index.html"))
 }

 const paginaNosotros = (req, res) =>{
    res.sendFile(resolve("./public/Nosotros.html"));
}

const paginaContacto = (req, res) =>{
    res.sendFile(resolve("./public/contacto.html"));
}

const paginaDerechosReservados = (req, res) =>{
    res.sendFile(resolve("./public/derechosReservados.html"));
}

const paginaInformesCita = (req, res) =>{
    res.render('formulario');
}

export{
    paginaInicio,
    paginaNosotros,
    paginaContacto,
    paginaDerechosReservados,
    paginaInformesCita
}