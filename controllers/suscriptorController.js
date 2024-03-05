import {  Suscrito } from "../models/Suscriptor.js";

const guardarSuscriptor = async (req, res) => {
    const {nombre, correo, numero, comentarios} = req.body;
    const aviso = []  
    
    if(nombre.trim() === ''){
        aviso.push({indicacion: 'Introduzca nombre completo'})
    }    
       
    if(correo.trim() === ''){
        aviso.push({indicacion: 'Introduzca correo'})
    }

    if(numero.trim() === ''){
        aviso.push({indicacion: 'Proporcione su telefono'})
    }

    if(comentarios.trim() === ''){
        aviso.push({indicacion: 'Proporcione su solicitud'})
    }

    if(aviso.length > 0){  
        res.render('formulario', {
            aviso,
            nombre,
            correo,
            comentarios
        }) 
    } else{
        try{
            await Suscrito.create ({
                nombre: nombre,
                correo: correo, 
                numero: numero,
                comentarios: comentarios
            });
            res.redirect('/informesCita')
    
        } catch{
            console.log('Datos sin enviar')
        }
    }
    
}


export {
    guardarSuscriptor
}