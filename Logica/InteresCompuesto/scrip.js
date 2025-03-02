//has un programa donde el usuario ingrese un capital inicial, el porcentaje de interes diario, y el ciclo de reinversión en días. El programa debe arrogar el resultado y el paso a paso.

let capitalInicial = parseFloat(prompt("Digite el capital inicial ($): "));
console.log(capitalInicial);

let tasaInteres = parseFloat(prompt("El la tasa de interes diario: "));
console.log(tasaInteres);

let nroDiasCiclo = parseInt(prompt('Ciclo de inversión (Días): '))
console.log(nroDiasCiclo);

let nroCiclos = parseInt(prompt("Número de ciclos a calcular: "));
console.log(nroCiclos);

console.log(`Numero de ciclos a realizar es de: ${nroCiclos}`)

let total, ganaciaInteresCiclo = 0;
for(let i = 0; i <= nroCiclos; i++){

    console.log(`Interes del ciclo ${i}: ${ganaciaInteresCiclo}`)
    console.log(`Paso ${i}: ${capitalInicial}`)
    ganaciaInteresCiclo = (capitalInicial*(tasaInteres/100))*nroDiasCiclo
    total = ganaciaInteresCiclo + capitalInicial
    capitalInicial = Math.round(total)
}
console.log(`Su total es de: ${total}`)

