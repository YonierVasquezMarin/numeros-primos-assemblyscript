// The entry file of your WebAssembly module.

export function listaPrimos(cantidad: i32): Array<i64> {

  let numerosPrimos: Array<i64> = [];
  let cursor: i32 = 1;

  while (numerosPrimos.length != cantidad) {
    let cantidadDivisores: Array<u32> = [];

    for (let i = 1; i < cursor + 1; i++) {
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
    }

    // Resetear estas variables para el próximo número
    cantidadDivisores = [];
    cursor += 1;
  }

  return numerosPrimos;
}
