const express = require('express');
const config = require('./config/app.config');
const routes = require('./routes');

// Initialize Express app
const app = express();
const PORT = config.server.port;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware (if needed)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', config.cors.allowedOrigins.join(','));
  res.header('Access-Control-Allow-Methods', config.cors.allowedMethods.join(','));
  res.header('Access-Control-Allow-Headers', config.cors.allowedHeaders.join(','));
  next();
});

// API Routes
app.use(`${config.api.prefix}/${config.api.version}`, routes);

// Simple route for the home page
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to J03l Express Server',
    status: 'Server is running successfully',
    apiEndpoint: `${config.api.prefix}/${config.api.version}`
  });
});

// ========== EJERCICIOS SIMPLES ==========

// Ejercicio 1: Calculadora básica
app.get('/ejercicios/calculadora', (req, res) => {
  const { operacion, num1, num2 } = req.query;
  let resultado;
  const a = parseFloat(num1);
  const b = parseFloat(num2);
  
  switch(operacion) {
    case 'suma':
      resultado = a + b;
      break;
    case 'resta':
      resultado = a - b;
      break;
    case 'multiplicacion':
      resultado = a * b;
      break;
    case 'division':
      resultado = b !== 0 ? a / b : 'Error: División por cero';
      break;
    default:
      return res.status(400).json({ error: 'Operación no válida. Use: suma, resta, multiplicacion o division' });
  }
  
  res.json({
    operacion,
    num1: a,
    num2: b,
    resultado
  });
});

// Ejercicio 2: Verificador de palíndromos
app.get('/ejercicios/palindromo/:texto', (req, res) => {
  const texto = req.params.texto.toLowerCase();
  const textoLimpio = texto.replace(/[^a-z0-9]/g, '');
  const textoReverso = textoLimpio.split('').reverse().join('');
  const esPalindromo = textoLimpio === textoReverso;
  
  res.json({
    texto_original: texto,
    es_palindromo: esPalindromo,
    mensaje: esPalindromo ? 'El texto es un palíndromo' : 'El texto no es un palíndromo'
  });
});

// Ejercicio 3: Generador de números aleatorios
app.get('/ejercicios/aleatorio', (req, res) => {
  const min = parseInt(req.query.min) || 1;
  const max = parseInt(req.query.max) || 100;
  const cantidad = parseInt(req.query.cantidad) || 1;
  
  if (min >= max) {
    return res.status(400).json({ error: 'El valor mínimo debe ser menor que el máximo' });
  }
  
  if (cantidad < 1 || cantidad > 100) {
    return res.status(400).json({ error: 'La cantidad debe estar entre 1 y 100' });
  }
  
  const numeros = [];
  for (let i = 0; i < cantidad; i++) {
    numeros.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  
  res.json({
    parametros: { min, max, cantidad },
    numeros
  });
});

// Ejercicio 4: Conversor de temperatura
app.get('/ejercicios/temperatura', (req, res) => {
  const { valor, de, a } = req.query;
  const temperatura = parseFloat(valor);
  
  if (isNaN(temperatura)) {
    return res.status(400).json({ error: 'El valor de temperatura debe ser un número' });
  }
  
  let resultado;
  let formula = '';
  
  if (de === 'celsius' && a === 'fahrenheit') {
    resultado = (temperatura * 9/5) + 32;
    formula = '(C × 9/5) + 32 = F';
  } else if (de === 'fahrenheit' && a === 'celsius') {
    resultado = (temperatura - 32) * 5/9;
    formula = '(F - 32) × 5/9 = C';
  } else if (de === 'celsius' && a === 'kelvin') {
    resultado = temperatura + 273.15;
    formula = 'C + 273.15 = K';
  } else if (de === 'kelvin' && a === 'celsius') {
    resultado = temperatura - 273.15;
    formula = 'K - 273.15 = C';
  } else if (de === 'fahrenheit' && a === 'kelvin') {
    resultado = (temperatura - 32) * 5/9 + 273.15;
    formula = '(F - 32) × 5/9 + 273.15 = K';
  } else if (de === 'kelvin' && a === 'fahrenheit') {
    resultado = (temperatura - 273.15) * 9/5 + 32;
    formula = '(K - 273.15) × 9/5 + 32 = F';
  } else {
    return res.status(400).json({ error: 'Unidades no válidas. Use: celsius, fahrenheit o kelvin' });
  }
  
  res.json({
    valor_original: temperatura,
    unidad_original: de,
    valor_convertido: resultado.toFixed(2),
    unidad_convertida: a,
    formula
  });
});

// Ejercicio 5: Contador de palabras y caracteres
app.post('/ejercicios/contador', (req, res) => {
  const { texto } = req.body;
  
  if (!texto) {
    return res.status(400).json({ error: 'Debe proporcionar un texto' });
  }
  
  const caracteres = texto.length;
  const caracteresNoEspacios = texto.replace(/\s/g, '').length;
  const palabras = texto.trim().split(/\s+/).length;
  const lineas = texto.split('\n').length;
  
  res.json({
    texto,
    estadisticas: {
      caracteres,
      caracteres_sin_espacios: caracteresNoEspacios,
      palabras,
      lineas
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  });
});

// Handle 404 routes
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested resource was not found on this server'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API available at http://localhost:${PORT}${config.api.prefix}/${config.api.version}`);
  console.log(`Environment: ${config.server.env}`);
});
