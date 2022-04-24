// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function primos(cantidad: i32): Array<i32> {
  console.log("Iniciando la función");

  let numerosPrimos: Array<i32> = [];
  let cursor: i32 = 1;

  while (numerosPrimos.length != cantidad) {
    console.log("Iniciando el while");

    let cantidadDivisores: Array<i32> = [];

    for (let i = 1; i < cursor + 1; i++) {
      console.log("iniciando el for");

      let division: f32 = f32(cursor) / f32(i);
      let esLaDivisionEntera: boolean = division % 1 == 0;

      if (esLaDivisionEntera) {
        cantidadDivisores.push(i);
      }

      // Si durante el calculo surgen más de dos divisores, no es primo
      if (cantidadDivisores.length > 2) {
        break;
      }
    }

    if (cantidadDivisores.length == 2) {
      numerosPrimos.push(cursor);
      console.log("Se agrega un primo");
    }

    // Resetear estas variables para el próximo número
    cantidadDivisores = [];
    cursor += 1;
  }

  return numerosPrimos;
}
