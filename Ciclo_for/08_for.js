//calcular los numero primos.

// Función para verificar si un número es primo
function esPrimo(num) {
    if (num <= 1) return false; // 0 y 1 no son primos
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // Si num es divisible por i, no es primo
    }
    return true; // Si no es divisible, es primo
  }
  
  // Usamos un bucle for para recorrer los números del 1 al 100
  for (let i = 1; i <= 100; i++) {
    if (esPrimo(i)) {
      console.log(i); // Imprimir el número primo
    }
  }
  