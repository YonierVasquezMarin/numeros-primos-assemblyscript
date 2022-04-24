# Uso por primera vez
Cuando se usa por primera vez este proyecto se debe hacer lo siguiente:
* Instalar los paquetes con `npm i`.
* Construir el proyecto para generar el archivo wasm usando `npm run asbuild`.
* Ejecutar el proyecto con `npm start`.

# Cuando modifique el index.ts
Cuando modifique el index.ts, se debe generar de nuevo el binario wasm con los nuevos cambios:
* Construir usando `npm run asbuild`.
* Ejecutar usando `npm start`.