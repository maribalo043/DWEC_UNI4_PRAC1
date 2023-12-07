import Galeria from './Galeria.js';

var galeria = new Galeria(7);

window.addEventListener('load',cargarPagina);
document.addEventListener('click',cambioImagen);
document.addEventListener('keydown', teclaPresionada);


function cargarPagina() {
//Se elige la foto de manera aleatoria, con el metodo
    var imagenSeleccionada = galeria.numeroAleatorio();

//Se crea el numero elemento con sus caracteristicas
    var elementoNuevo = document.createElement('div');
    elementoNuevo.id = 'imagen';
    elementoNuevo.style.backgroundImage = 'url(' + './images/' + imagenSeleccionada + ')';
//Se obtiene el lugar donde hay que sustituir la imagen y el elemento que va a ser sustituido
    var contenedor = document.getElementById('galeria');
    var elementoViejo = document.getElementById('imagen');
//Se sustituye el elemento
    contenedor.replaceChild(elementoNuevo, elementoViejo);
    actualizarEstiloBotones();
}

/*Funcion para poder cambiar de imagen*/
function cambioImagen(event) {
    var imagenSeleccionada;
    switch (event.target.id) {
        case 'primera':
            imagenSeleccionada = galeria.irPrimero();
            sustituirImagen(imagenSeleccionada);
            break;
        case 'anterior':
            imagenSeleccionada = galeria.retroceder();
            sustituirImagen(imagenSeleccionada);
            break;
        case 'siguiente':
            imagenSeleccionada = galeria.avanzar();
            sustituirImagen(imagenSeleccionada);
            break;
        case 'ultima':
            imagenSeleccionada = galeria.irFinal();
            sustituirImagen(imagenSeleccionada);
            break;
    }
}

function sustituirImagen(imagenSeleccionada) {
    // Crear el nuevo elemento con sus características
    var elementoNuevo = document.createElement('div');
    elementoNuevo.id = 'imagen';
    elementoNuevo.style.backgroundImage = 'url(./images/' + imagenSeleccionada + ')';

    // Obtener el lugar donde hay que sustituir la imagen y el elemento que va a ser sustituido
    var contenedor = document.getElementById('galeria');
    var elementoViejo = document.getElementById('imagen');

    // Sustitucion del elemento
    contenedor.replaceChild(elementoNuevo, elementoViejo);
    actualizarEstiloBotones();
}
/*RETO EXTRA: si apretas las teclas de derecha o izquierda avanza uno o retrocede uno, si apretas la flecha hacia arriba
te lleva al final, y la de abajo vas a la primera*/
function teclaPresionada(event) {
    switch (event.key) {
        case 'ArrowLeft':
            galeria.retroceder();
            break;
        case 'ArrowRight':
            galeria.avanzar();
            break;
        case 'ArrowUp':
            galeria.irFinal();
            break;
        case 'ArrowDown':
            galeria.irPrimero();
            break;
    }
    sustituirImagen(galeria._lista[galeria._posicion]);
}
/*Como necesito cambiar los colores en dos funciones distintas, tanto en la de cargar la pagina como en la de cambiar
de imagen pues hago una funcion y asi ahorro lineas para no poner codigo de más*/
function actualizarEstiloBotones() {
    var primera = document.getElementById('primera');
    var anterior = document.getElementById('anterior');
    var siguiente = document.getElementById('siguiente');
    var ultima = document.getElementById('ultima');

    if (galeria._posicion == 0) {
        cambiarEstiloBoton(primera, '#FF5C33');
        cambiarEstiloBoton(anterior, '#FF5C33');
        cambiarEstiloBoton(siguiente, '#B8B894');
        cambiarEstiloBoton(ultima, '#B8B894');
    } else if (galeria._posicion == galeria._lista.length - 1) {
        cambiarEstiloBoton(primera, '#B8B894');
        cambiarEstiloBoton(anterior, '#B8B894');
        cambiarEstiloBoton(siguiente, '#FF5C33');
        cambiarEstiloBoton(ultima, '#FF5C33');
    } else {
        cambiarEstiloBoton(primera, '#B8B894');
        cambiarEstiloBoton(anterior, '#B8B894');
        cambiarEstiloBoton(siguiente, '#B8B894');
        cambiarEstiloBoton(ultima, '#B8B894');
    }
}
/*De esta manera cambia la forma de ver del cursor del modo que has proporcionado en el style.css, concretamente en 
.deshabilitado y .habilitado*/
function cambiarEstiloBoton(boton, color) {
    boton.style.backgroundColor = color;
    if(color === '#FF5C33'){
        boton.style.cursor = 'default';
    }else{
        boton.style.cursor = 'pointer';
    }
}




