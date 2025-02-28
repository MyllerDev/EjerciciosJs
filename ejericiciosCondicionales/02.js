//"Diseñe un algoritmo que lea tres números e imprima cuál de ellos es o no la suma de los otros dos."**

let numero1 = parseInt(prompt('Digite el primer número: '))
let numero2 = parseInt(prompt('Digite el segundo número: '))
let numero3 = parseInt(prompt('Digite el tercer número: '))

if(numero1 === numero2+numero3){
    console.log(`${numero1} es la suma de ${numero2} + ${numero3}`)
}else if(numero2 === numero1+numero3){
    console.log(`${numero2} es la suma de ${numero1} + ${numero3}`)
}else if(numero3 === numero2+numero1){
    console.log(`${numero3} es la suma de ${numero2} + ${numero1}`)
}else{
    console.log('Ninguno de los numero son igual a la suma entre dos de ellos')
}