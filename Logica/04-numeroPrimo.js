function esPrimo(num) {
    if (num <= 1) return false;
    
    // Bucle para verificar si el número tiene divisores además de 1 y él mismo
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Si encuentra un divisor, no es primo
    }
    
    return true;
}

// Ejemplo de uso
let numero = parseInt(prompt("Ingrese un número:"));
console.log(numero, esPrimo(numero) ? "es primo" : "no es primo");
