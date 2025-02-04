// sumar solo los números pares del 1 al 20

let numero = 1;
let sumaPar = 0;

while(numero <= 20){
    if(numero%2 ===0){
        sumaPar += numero
    }
    numero++;
}

console.log(`La suma total es: ${sumaPar}`);