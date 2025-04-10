# j03l

Este repositorio contiene una aplicación de servidor Express.js con ejercicios prácticos.

## Servidor Express

Una configuración básica de servidor Express.js con nodemon para desarrollo.

### Estructura del Proyecto

```
J03lGIt/
├── src/
│   ├── config/
│   │   └── app.config.js
│   ├── routes/
│   │   └── index.js
│   └── App.js
├── package.json
└── README.md
```

### Instalación

```bash
# Instalar dependencias
npm install
```

### Ejecutar el Servidor

```bash
# Ejecutar en modo desarrollo con nodemon (reinicio automático al cambiar archivos)
npm run dev

# Ejecutar en modo producción
npm start
```

## Ejercicios Incluidos

El archivo `src/App.js` contiene 5 ejercicios prácticos implementados como endpoints de API:

### 1. Calculadora Básica

**Endpoint:** `GET /ejercicios/calculadora`

**Parámetros:**
- `operacion`: Tipo de operación (suma, resta, multiplicacion, division)
- `num1`: Primer número
- `num2`: Segundo número

**Ejemplo:**
```
GET /ejercicios/calculadora?operacion=suma&num1=5&num2=3
```

### 2. Verificador de Palíndromos

**Endpoint:** `GET /ejercicios/palindromo/:texto`

**Parámetros:**
- `texto`: Texto a verificar si es palíndromo

**Ejemplo:**
```
GET /ejercicios/palindromo/anitalavalatina
```

### 3. Generador de Números Aleatorios

**Endpoint:** `GET /ejercicios/aleatorio`

**Parámetros:**
- `min`: Valor mínimo (por defecto: 1)
- `max`: Valor máximo (por defecto: 100)
- `cantidad`: Cantidad de números a generar (por defecto: 1)

**Ejemplo:**
```
GET /ejercicios/aleatorio?min=1&max=10&cantidad=5
```

### 4. Conversor de Temperatura

**Endpoint:** `GET /ejercicios/temperatura`

**Parámetros:**
- `valor`: Valor de temperatura a convertir
- `de`: Unidad original (celsius, fahrenheit, kelvin)
- `a`: Unidad destino (celsius, fahrenheit, kelvin)

**Ejemplo:**
```
GET /ejercicios/temperatura?valor=30&de=celsius&a=fahrenheit
```

### 5. Contador de Palabras y Caracteres

**Endpoint:** `POST /ejercicios/contador`

**Cuerpo de la solicitud:**
```json
{
  "texto": "Este es un ejemplo de texto para contar palabras y caracteres"
}
```

**Respuesta:**
Devuelve estadísticas sobre el texto: número de caracteres, caracteres sin espacios, palabras y líneas.

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
