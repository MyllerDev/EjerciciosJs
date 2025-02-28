//Elaborar un algoritmo que ingrese el nombre de un empleado, su salario básico por horo y el numero de horas trabajadas en el mes, y que ademas le de un bono de 12% si el salario es mayor a 850mil pesos de lo constrario solo devuel el nombre y el valor a pagar.

let nombre = prompt('Digite su nombre: ')
let valorHora = parseFloat(prompt('Digíte el valor de la hora de trabajo: '))
let nroHoras = parseFloat(prompt('Digite el número de horas trabajadas: '))

let dineroGenerado = valorHora * nroHoras
let bono = 0.12

//validar entrega de bonificación
if(dineroGenerado > 850000){
    let totalMasBono = dineroGenerado*bono
    console.log(`Sr. ${nombre} su salario es de:  ${dineroGenerado}`)
    console.log(`Por tener un salario mayor a $850.000 se le otorga un bono del 12%`)
    console.log(`Su salario Total es de:  ${totalMasBono}`)
}else{
    console.log(`Sr. ${nombre} su salario es de: ${dineroGenerado}`)
}