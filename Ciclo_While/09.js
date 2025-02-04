//serie Fibonacci de un número ingresado por el usuario.

let finalNumber = parseInt(prompt('Ingrese un número: '));
let pivot = 1;
let iterador = 1;

while ( iterador <= finalNumber) {
    pivot = iterador + pivot;
    console.log(`Serie fibonacci: ${pivot}`)
    iterador++;
}

