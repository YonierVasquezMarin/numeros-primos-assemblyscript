// The entry file of your WebAssembly module.

export function listaPrimos(cantidad: u32): Array<u64> {

  let numerosPrimos: Array<u64> = [];
  let cursor: u64 = 1;

  while (numerosPrimos.length != cantidad) {
    let cantidadDivisores: Array<u64> = [];

    for (let i:u64 = 1; i < cursor + 1; i++) {
      let division: f64 = f64(cursor) / f64(i);
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
    }

    // Resetear estas variables para el próximo número
    cantidadDivisores = [];
    cursor += 1;
  }

  return numerosPrimos;
}
