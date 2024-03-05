//Selectores
const formularioCita = document.querySelector('.formulario')
const btnEnviar = document.querySelector('#enviar');
const inputNombre = document.querySelector('#nombre');
const inputCorreo = document.querySelector('#correo');
const inputNumero = document.querySelector('#numero');
const inputComentario = document.querySelector('#comentario');

const autor = document.querySelector('.derechosAutor');




//btnEnviar.disabled = true;

//Eventos
inputNombre.addEventListener('input', llenarObjeto)
inputCorreo.addEventListener('input', llenarObjeto)
inputNumero.addEventListener('input', llenarObjeto)
inputComentario.addEventListener('input', llenarObjeto)
btnEnviar.addEventListener('click', envio);


//Objeto suscriptor
export const suscriptorObj ={
    nombre: '',
    correo: '',
    telefono: '',
    comentario: '' 
}

//funciones
function envio(e){
    e.preventDefault();
     if(inputNombre.value === '' || inputCorreo.value === '' || inputNumero.value === '' || inputComentario.value === ''){
         //console.log('Todos los campos deben llenarse')
         avisoAlerta = document.createElement('p');
         avisoAlerta.textContent = 'Todos los campos se deben llenar'

         letreroWarning = document.createElement('div');
         letreroWarning.appendChild(avisoAlerta);
         letreroWarning.style.width = '50%'
         letreroWarning.style.marginTop = '5%'
         letreroWarning.style.color = 'white'
         letreroWarning.style.backgroundColor = 'darkred'
         letreroWarning.style.borderRadius = '0 5% 5% 0'
         formularioCita.appendChild(letreroWarning);
         setTimeout(() =>{
            letreroWarning.remove();   
         }, 3000)
         
        

         

     }else{
        //console.log('Los campos estan completos')
        
        avisoValido = document.createElement('div');
        avisoValido.textContent = 'Datos recabados con exito'

        letreroNotifica = document.createElement('div');
        letreroNotifica.appendChild(avisoValido);
        letreroNotifica.style.width = '50%'
        letreroNotifica.style.marginTop = '5%'
        letreroNotifica.style.color = 'white';
        letreroNotifica.style.backgroundColor = 'darkgreen'
        letreroNotifica.style.borderRadius = '0 5% 5% 0'
        formularioCita.appendChild(letreroNotifica);
        setTimeout(() =>{
            letreroNotifica.remove();   
        }, 3000)
        
        
     }

}

function llenarObjeto(e){
    suscriptorObj[e.target.name] = e.target.value

}

