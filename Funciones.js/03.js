//verificar si un numero es par

let numero = parseInt(prompt("Digite un número: "))

const par = (numero) => {
    if(numero%2 == 0){
        return `El numero ${numero} es Par.`
    }else{
        return `El número ${numero} es Impar.`
    }
}

console.log(par(numero));