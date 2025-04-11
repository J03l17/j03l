// Importamos readline para manejar entrada del usuario en Node.js
const readline = require('readline');

// Función para crear una interfaz de readline
function crearInterfaz() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

// Función para preguntar al usuario (reemplazo de prompt)
async function preguntarUsuario(pregunta) {
  const rl = crearInterfaz();
  return new Promise(resolve => {
    rl.question(pregunta, respuesta => {
      rl.close();
      resolve(respuesta);
    });
  });
}

// 1. Sumar elementos de un array
function sumarArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  
  // 2. Número mayor y menor
  function mayorYMenor(arr) {
    return {
      mayor: Math.max(...arr),
      menor: Math.min(...arr)
    };
  }
  
  // 3. Contar elementos pares
  function contarPares(arr) {
    return arr.filter(num => num % 2 === 0).length;
  }
  
  // 4. Ordenar un array sin .sort()
  function ordenarArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
    return arr;
  }
  
  // 5. Buscar un elemento
  function buscarNombre(nombres, nombreBuscado) {
    return nombres.indexOf(nombreBuscado);
  }
  
  // 6. Revertir un array sin .reverse()
  function invertirArray(arr) {
    let invertido = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      invertido.push(arr[i]);
    }
    return invertido;
  }
  
  // 7. Convertir nombres a mayúsculas
  const convertirAMayusculas = nombres => nombres.map(nombre => nombre.toUpperCase());
  
  // 8. Sumar solo los números positivos
  function sumarPositivos(arr) {
    return arr.filter(n => n > 0).reduce((acc, n) => acc + n, 0);
  }
  
  // 9. Obtener el primer múltiplo de 5
  function primerMultiploDe5(arr) {
    return arr.find(n => n % 5 === 0);
  }
  
  // 10. Tabla de multiplicar
  function tablaMultiplicar() {
    let num = parseInt(prompt("Ingrese un número:"));
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
  }
  
  // 11. Generar secuencia de Fibonacci (10 primeros)
  function fibonacci() {
    let a = 0, b = 1;
    for (let i = 0; i < 10; i++) {
      console.log(a);
      [a, b] = [b, a + b];
    }
  }
  
  // 12. Adivinar un número
  function adivinarNumero() {
    let secreto = Math.floor(Math.random() * 10) + 1;
    let intento;
    while (intento != secreto) {
      intento = parseInt(prompt("Adivina el número (1-10):"));
    }
    alert("¡Correcto!");
  }
  
  // 13. Contar regresivamente desde un número
  function cuentaRegresiva() {
    let n = parseInt(prompt("Ingrese un número:"));
    while (n >= 0) {
      console.log(n--);
    }
  }
  
  // 14. Validar entrada de usuario
  function validarEntrada() {
    let numero;
    do {
      numero = parseInt(prompt("Ingrese un número mayor a 0:"));
    } while (numero <= 0 || isNaN(numero));
  }
  
  // 15. Mostrar menú hasta que el usuario salga
  function mostrarMenu() {
    let opcion;
    do {
      opcion = prompt("Menú:\n1. Opción A\n2. Opción B\n3. Salir");
    } while (opcion !== "3");
  }
  
  // 16. Sumar impares entre 1 y 50, detener si suma > 500
  function sumarImparesHasta50() {
    let suma = 0;
    for (let i = 1; i <= 50; i += 2) {
      suma += i;
      if (suma > 500) break;
    }
    console.log("Suma:", suma);
  }
  
  // 17. Contador de intentos de login
  function login() {
    let intentos = 0;
    const claveCorrecta = "1234";
    while (intentos < 3) {
      let clave = prompt("Ingrese la clave:");
      if (clave === claveCorrecta) {
        alert("Acceso permitido");
        return;
      }
      intentos++;
    }
    alert("Acceso denegado");
  }
  
  // 18. Sumar hasta que el usuario ingrese 0
  function sumarHastaCero() {
    let suma = 0, num;
    while ((num = parseInt(prompt("Ingrese un número (0 para salir):"))) !== 0) {
      suma += num;
    }
    console.log("Suma total:", suma);
  }
  
  // 19. Serie Fibonacci hasta que un número supere 100
  function fibonacciHasta100() {
    let a = 0, b = 1;
    while (a <= 100) {
      console.log(a);
      [a, b] = [b, a + b];
    }
  }
  
  // 20. Múltiplos de 3 hasta 50
  function multiplosDe3() {
    let i = 3;
    while (i < 50) {
      console.log(i);
      i += 3;
    }
  }

// Función para ejecutar los ejercicios desde la línea de comandos
async function ejecutarEjercicio(numero) {
  // Ejemplos de arrays para las funciones que los requieren
  const arrayNumeros = [5, 2, 9, 1, 7, 3, 8, 4, 6, 10];
  const arrayNombres = ["Juan", "Ana", "Pedro", "María", "Luis"];
  
  switch(numero) {
    case 1:
      console.log("Resultado de sumar array:", sumarArray(arrayNumeros));
      break;
    case 2:
      console.log("Mayor y menor:", mayorYMenor(arrayNumeros));
      break;
    case 3:
      console.log("Cantidad de números pares:", contarPares(arrayNumeros));
      break;
    case 4:
      console.log("Array ordenado:", ordenarArray([...arrayNumeros])); // Usamos spread para no modificar el original
      break;
    case 5:
      console.log("Posición de 'Ana':", buscarNombre(arrayNombres, "Ana"));
      break;
    case 6:
      console.log("Array invertido:", invertirArray(arrayNumeros));
      break;
    case 7:
      console.log("Nombres en mayúsculas:", convertirAMayusculas(arrayNombres));
      break;
    case 8:
      console.log("Suma de positivos:", sumarPositivos([-2, 5, -9, 10, 3, -1]));
      break;
    case 9:
      console.log("Primer múltiplo de 5:", primerMultiploDe5(arrayNumeros));
      break;
    case 10:
      console.log("Tabla de multiplicar:");
      const numTabla = parseInt(await preguntarUsuario("Ingrese un número para ver su tabla de multiplicar: "));
      for (let i = 1; i <= 10; i++) {
        console.log(`${numTabla} x ${i} = ${numTabla * i}`);
      }
      break;
    case 11:
      console.log("Secuencia de Fibonacci:");
      const cantidadFib = parseInt(await preguntarUsuario("¿Cuántos números de la secuencia desea ver? "));
      {
        let a = 0, b = 1;
        for (let i = 0; i < cantidadFib; i++) {
          console.log(a);
          [a, b] = [b, a + b];
        }
      }
      break;
    case 12:
      console.log("Adivinar un número:");
      {
        const secreto = Math.floor(Math.random() * 10) + 1;
        let intento;
        let intentos = 0;
        console.log("Adivina un número entre 1 y 10");
        
        do {
          intentos++;
          intento = parseInt(await preguntarUsuario(`Intento ${intentos}: `));
          
          if (intento < secreto) {
            console.log("El número es mayor");
          } else if (intento > secreto) {
            console.log("El número es menor");
          }
        } while (intento !== secreto);
        
        console.log(`¡Correcto! Adivinaste en ${intentos} intentos.`);
      }
      break;
    case 13:
      console.log("Cuenta regresiva:");
      {
        const n = parseInt(await preguntarUsuario("Ingrese un número para la cuenta regresiva: "));
        let contador = n;
        while (contador >= 0) {
          console.log(contador--);
        }
      }
      break;
    case 14:
      console.log("Validar entrada de usuario:");
      {
        let numero;
        do {
          numero = parseInt(await preguntarUsuario("Ingrese un número mayor a 0: "));
          if (numero <= 0 || isNaN(numero)) {
            console.log("Número inválido. Debe ser mayor a 0.");
          }
        } while (numero <= 0 || isNaN(numero));
        console.log(`Número válido ingresado: ${numero}`);
      }
      break;
    case 15:
      console.log("Menú interactivo:");
      {
        let opcion;
        do {
          opcion = await preguntarUsuario("Menú:\n1. Opción A\n2. Opción B\n3. Salir\nSeleccione una opción: ");
          
          switch(opcion) {
            case "1":
              console.log("Ha seleccionado la Opción A");
              break;
            case "2":
              console.log("Ha seleccionado la Opción B");
              break;
            case "3":
              console.log("Saliendo del menú...");
              break;
            default:
              console.log("Opción inválida");
          }
        } while (opcion !== "3");
      }
      break;
    case 16:
      console.log("Suma de impares hasta un límite:");
      {
        const limite = parseInt(await preguntarUsuario("Ingrese un límite para la suma (por defecto 50): ")) || 50;
        const limiteSum = parseInt(await preguntarUsuario("Ingrese un límite para detener la suma (por defecto 500): ")) || 500;
        
        let suma = 0;
        for (let i = 1; i <= limite; i += 2) {
          suma += i;
          console.log(`Sumando ${i}, suma actual: ${suma}`);
          if (suma > limiteSum) {
            console.log(`Se detuvo en i=${i} porque la suma superó ${limiteSum}`);
            break;
          }
        }
        console.log("Suma final:", suma);
      }
      break;
    case 17:
      console.log("Simulación de login:");
      {
        let intentos = 0;
        const maxIntentos = 3;
        const claveCorrecta = await preguntarUsuario("Establezca una clave para probar: ");
        console.log("\nAhora intente iniciar sesión con la clave que estableció.\n");
        
        while (intentos < maxIntentos) {
          const clave = await preguntarUsuario(`Intento ${intentos + 1}/${maxIntentos}. Ingrese la clave: `);
          if (clave === claveCorrecta) {
            console.log("Acceso permitido");
            break;
          }
          intentos++;
          if (intentos === maxIntentos) {
            console.log("Acceso denegado. Ha excedido el número máximo de intentos.");
          } else {
            console.log("Clave incorrecta. Intente nuevamente.");
          }
        }
      }
      break;
    case 18:
      console.log("Sumar hasta que el usuario ingrese 0:");
      {
        let suma = 0, num;
        console.log("Ingrese números para sumar. Ingrese 0 para terminar.");
        
        do {
          num = parseInt(await preguntarUsuario("Ingrese un número (0 para salir): "));
          if (!isNaN(num)) {
            suma += num;
            if (num !== 0) {
              console.log(`Suma actual: ${suma}`);
            }
          } else {
            console.log("Por favor ingrese un número válido.");
          }
        } while (num !== 0);
        
        console.log("Suma total:", suma);
      }
      break;
    case 19:
      console.log("Serie Fibonacci hasta superar un límite:");
      {
        const limite = parseInt(await preguntarUsuario("Ingrese un límite para la secuencia Fibonacci (por defecto 100): ")) || 100;
        let a = 0, b = 1;
        console.log(`Mostrando secuencia Fibonacci hasta superar ${limite}:`);
        while (a <= limite) {
          console.log(a);
          [a, b] = [b, a + b];
        }
        console.log(`El siguiente número sería ${a}, que ya supera ${limite}`);
      }
      break;
    case 20:
      console.log("Múltiplos de un número hasta un límite:");
      {
        const multiplo = parseInt(await preguntarUsuario("Ingrese el número del cual quiere ver los múltiplos (por defecto 3): ")) || 3;
        const limite = parseInt(await preguntarUsuario("Ingrese el límite hasta donde mostrar los múltiplos (por defecto 50): ")) || 50;
        
        let i = multiplo;
        console.log(`Mostrando múltiplos de ${multiplo} hasta ${limite}:`);
        while (i < limite) {
          console.log(i);
          i += multiplo;
        }
      }
      break;
    default:
      console.log("Ejercicio no válido. Por favor selecciona un número del 1 al 20.");
  }
}

// Si se ejecuta directamente desde Node.js
if (require.main === module) {
  // Obtener el número de ejercicio de los argumentos de la línea de comandos
  const args = process.argv.slice(2);
  const ejercicio = args.length > 0 ? parseInt(args[0]) : null;
  
  // Función principal para manejar la ejecución asíncrona
  async function main() {
    if (ejercicio) {
      console.log(`Ejecutando ejercicio ${ejercicio}:\n`);
      await ejecutarEjercicio(ejercicio);
      process.exit(0); // Aseguramos que el programa termine después de ejecutar el ejercicio
    } else {
    // Mostrar lista de ejercicios disponibles
    console.log("Lista de ejercicios disponibles:");
    console.log("1. Sumar elementos de un array");
    console.log("2. Número mayor y menor");
    console.log("3. Contar elementos pares");
    console.log("4. Ordenar un array sin .sort()");
    console.log("5. Buscar un elemento");
    console.log("6. Revertir un array sin .reverse()");
    console.log("7. Convertir nombres a mayúsculas");
    console.log("8. Sumar solo los números positivos");
    console.log("9. Obtener el primer múltiplo de 5");
    console.log("10. Tabla de multiplicar");
    console.log("11. Generar secuencia de Fibonacci (10 primeros)");
    console.log("12. Adivinar un número");
    console.log("13. Contar regresivamente desde un número");
    console.log("14. Validar entrada de usuario");
    console.log("15. Mostrar menú hasta que el usuario salga");
    console.log("16. Sumar impares entre 1 y 50, detener si suma > 500");
    console.log("17. Contador de intentos de login");
    console.log("18. Sumar hasta que el usuario ingrese 0");
    console.log("19. Serie Fibonacci hasta que un número supere 100");
    console.log("20. Múltiplos de 3 hasta 50");
    console.log("\nPara ejecutar un ejercicio específico: npm run ejercicios -- <número>");
    console.log("Ejemplo: npm run ejercicios -- 1");
    }
  }
  
  // Ejecutar la función principal
  main();
}
  