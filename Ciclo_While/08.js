// suma consecutiva de hasta el numero ingresado por el usuario.

let finalNumber = parseFloat(prompt('Digite un número'));
let sum = 0;
let iterador = 0;

while (iterador <= finalNumber){
    sum += iterador
    iterador++
}

console.log(`El resultado de la suma consecutiva es : ${sum}`)