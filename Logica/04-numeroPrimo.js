function numeroPrimo(numero) {
    // Validar que el número sea realmente un número y no otro tipo de dato
    if (typeof numero !== "number" || isNaN(numero)) return false;

    // Los números menores o iguales a 1 no son primos
    if (numero <= 1) return false;

    // Los números 2 y 3 son primos
    if (numero <= 3) return true;

    // Si el número es divisible por 2 o por 3, no es primo
    if (numero % 2 === 0 || numero % 3 === 0) return false;

    // Revisamos divisibilidad desde 5 hasta sqrt(numero), saltando de 2 en 2 (números impares)
    for (let i = 5; i * i <= numero; i += 2) {
        // Si el número es divisible por cualquier número en este rango, no es primo
        if (numero % i === 0) return false;
    }

    // Si no encontramos ningún divisor, el número es primo
    return true;
}

// Ejemplos de uso
console.log(numeroPrimo(7));   // true (7 es primo)
console.log(numeroPrimo(10));  // false (10 es divisible por 2)
console.log(numeroPrimo(23));  // true (23 es primo)
console.log(numeroPrimo(25));  // false (25 es divisible por 5)
console.log(numeroPrimo("texto")); // false (no es un número)
console.log(numeroPrimo(-5));  // false (los negativos no son primos)
