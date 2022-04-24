import { listaPrimos } from './build/release.js';

document.querySelector('#btnMostrarPrimos').addEventListener('click', e => {
    
    // Limpiar pantalla
    document.querySelector('#papel').innerText = '';

    // Dar unos milisegundos en delay para mostrar la pantalla en blanco
    setTimeout(func => {
        // Obtener la cantidad de primos a mostrar
        const cantidadPrimos = parseInt(document.querySelector('#inputCantidadPrimos').value);
        
        // Calcular la lista de números primos, además, el tiempo de duracion del algoritmo
        const tiempoInicial = Date.now()
        const numerosPrimosObtenidos = listaPrimos(cantidadPrimos);
        const tiempoFinal = Date.now()

        mostrarDuracionAlgoritmo(tiempoInicial, tiempoFinal);

        mostrarNumerosEnPantalla(numerosPrimosObtenidos)
    }, 120)
    
});

/**
 * Calcula la diferencia de tiempos y la muestra en pantalla.
 * @param {number} tiempoInicial 
 * @param {number} tiempoFinal 
 */
 function mostrarDuracionAlgoritmo(tiempoInicial, tiempoFinal) {
    const duracion = tiempoFinal - tiempoInicial;

    document.querySelector('#salidaDuracionAlgoritmo').innerText = duracion;
}

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
