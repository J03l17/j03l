# j03l

Este repositorio contiene ejercicios básicos de JavaScript.

## Estructura del Proyecto

```
J03lGIt/
├── src/
│   └── App.js     # Archivo con 5 ejercicios básicos de JavaScript
├── package.json  # Configuración del proyecto Node.js
└── README.md    # Este archivo de documentación
```

Este repositorio está organizado de manera simple para facilitar el aprendizaje de JavaScript. Contiene ejemplos básicos que pueden ejecutarse directamente en Node.js.

## Ejercicios de JavaScript

El archivo `src/App.js` contiene 5 ejercicios básicos de JavaScript:

### 1. Suma de Dos Números

```javascript
// 1. Suma de dos números
let num1 = 5;
let num2 = 3;
let suma = num1 + num2;
console.log("1. La suma es:", suma);
```

Este ejercicio muestra cómo sumar dos variables numéricas y mostrar el resultado en la consola.

### 2. Verificar si un Número es Par o Impar

```javascript
// 2. Verificar si un número es par o impar
let numero = 8;
if (numero % 2 === 0) {
  console.log("2. " + numero + " es par");
} else {
  console.log("2. " + numero + " es impar");
}
```

Este ejercicio utiliza el operador módulo (%) para determinar si un número es par o impar. Si el resto de la división por 2 es 0, el número es par.

### 3. Recorrer un Array con un Bucle For

```javascript
// 3. Recorrer un array con un for
let frutas = ["manzana", "banana", "naranja"];
console.log("3. Lista de frutas:");
for (let i = 0; i < frutas.length; i++) {
  console.log("- " + frutas[i]);
}
```

Este ejercicio muestra cómo recorrer un array utilizando un bucle for tradicional y mostrar cada elemento en la consola.

### 4. Contar Letras en una Palabra

```javascript
// 4. Contar letras en una palabra
let palabra = "javascript";
console.log("4. La palabra '" + palabra + "' tiene " + palabra.length + " letras");
```

Este ejercicio utiliza la propiedad `length` para contar el número de caracteres en una cadena de texto.

### 5. Función que Saluda con el Nombre

```javascript
// 5. Función que saluda con el nombre que le pases
function saludar(nombre) {
  console.log("5. Hola, " + nombre + "!");
}
saludar("Carlos");
```

Este ejercicio muestra cómo definir una función que acepta un parámetro y la llama con un argumento específico.

## Configuración

La configuración del servidor se almacena en `src/config/app.config.js`. Puedes modificar ajustes como:

- Número de puerto
- Prefijo de API
- Configuración CORS
- Ajustes de entorno

## Características

- Configuración de servidor Express.js
- Estructura de rutas API
- Gestión de configuración
- Middleware para manejo de errores
- Soporte CORS
- Nodemon para desarrollo
- 5 ejercicios prácticos implementados

