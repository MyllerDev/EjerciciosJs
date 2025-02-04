//mostrar el factorial de un número ingresado por consola.

let numero = parseFloat(prompt('Ingrese un valor'));
let facto = 1;
let corre = 0;

while(corre < numero){
    facto += corre * facto
    corre++;
}

console.log(`El factorial del numero ${numero} es: ${facto}`);