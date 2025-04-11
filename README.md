# j03l

Este repositorio contiene ejercicios básicos y avanzados de JavaScript.

## Estructura del Proyecto

```
J03lGIt/
├── src/
│   ├── App.js         # Archivo con 5 ejercicios básicos de JavaScript
│   └── Ejercicios1.js # Archivo con 20 ejercicios de JavaScript
├── package.json      # Configuración del proyecto Node.js
└── README.md        # Este archivo de documentación
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
- 5 ejercicios prácticos implementados en App.js
- 20 ejercicios prácticos implementados en Ejercicios1.js

## Ejercicios Avanzados de JavaScript

El archivo `src/Ejercicios1.js` contiene 20 ejercicios de JavaScript que cubren diversos conceptos:

1. **Sumar elementos de un array** - Uso de reduce para sumar elementos
2. **Número mayor y menor** - Encontrar valores máximos y mínimos
3. **Contar elementos pares** - Filtrado de arrays
4. **Ordenar un array sin .sort()** - Implementación manual de algoritmo de ordenación
5. **Buscar un elemento** - Búsqueda en arrays
6. **Revertir un array sin .reverse()** - Inversión manual de arrays
7. **Convertir nombres a mayúsculas** - Transformación de arrays con map
8. **Sumar solo los números positivos** - Filtrado y reducción
9. **Obtener el primer múltiplo de 5** - Búsqueda con condiciones
10. **Tabla de multiplicar** - Bucles y entrada de usuario
11. **Generar secuencia de Fibonacci** - Implementación de algoritmos matemáticos
12. **Adivinar un número** - Juego interactivo con entrada de usuario
13. **Contar regresivamente** - Bucles while con decremento
14. **Validar entrada de usuario** - Validación de datos con bucles do-while
15. **Mostrar menú interactivo** - Interfaz de usuario basada en consola
16. **Sumar impares con límite** - Bucles con condiciones de parada
17. **Contador de intentos de login** - Simulación de autenticación
18. **Sumar hasta que el usuario ingrese 0** - Acumulación con condición de parada
19. **Serie Fibonacci hasta superar un límite** - Algoritmos con condiciones dinámicas
20. **Múltiplos de un número hasta un límite** - Generación de secuencias numéricas

### Ejecución de los Ejercicios

Puedes ejecutar los ejercicios individualmente usando npm:

```bash
# Ejecutar la lista de ejercicios disponibles
npm run ejercicios

# Ejecutar un ejercicio específico (ejemplo: ejercicio 10)
npm run ejercicios -- 10
```

Los ejercicios 1-9 utilizan datos predefinidos, mientras que los ejercicios 10-20 son interactivos y solicitan entrada del usuario a través de la consola.

