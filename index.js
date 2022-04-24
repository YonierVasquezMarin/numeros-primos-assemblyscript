import { listaPrimos } from './build/release.js';

document.querySelector('#btnMostrarPrimos').addEventListener('click', e => {
    
    // Limpiar pantalla
    document.querySelector('#papel').innerText = '';

    // Dar unos milisegundos en delay para mostrar la pantalla en blanco
    setTimeout(func => {
        // Obtener la cantidad de primos a mostrar
        const cantidadPrimos = parseInt(document.querySelector('#inputCantidadPrimos').value);
        
        // Calcular la lista de números primos
        const numerosPrimosObtenidos = listaPrimos(cantidadPrimos);

        // Mostrar los números primos en pantalla
        mostrarNumerosEnPantalla(numerosPrimosObtenidos)
    }, 120)
    
});


/**
 * Muestra en pantalla la lista de números en formato "2, 3, 4, 5, ..."
 * @param {array} listaNumeros 
 */
function mostrarNumerosEnPantalla(listaNumeros) {
    let textoAMostrar = '';

    for (let i = 0; i < listaNumeros.length; i++) {
        textoAMostrar += listaNumeros[i] + ', ';
    }

    document.querySelector('#papel').innerText = textoAMostrar;
}
