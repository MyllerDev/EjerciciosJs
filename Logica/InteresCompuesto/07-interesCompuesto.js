//has un programa donde el usuario ingrese un capital inicial, el porcentaje de interes diario, y el ciclo de reinversión en días. El programa debe arrogar el resultado y el paso a paso.

let capitalInicial = parseFloat(prompt("Digite el capital inicial ($): "));
console.log(capitalInicial);

let tasaInteres = parseFloat(prompt("El la tasa de interes diario: "));
console.log(tasaInteres);
//let cicloReinversion = parseInt(prompt('Ciclo de inversión (Días): '))
let nroDias = parseInt(prompt("Dias de reinversión de capital: "));
console.log(nroDias);

let resultado = 0;

for (let i = 0; i <= nroDias; i++) {

    console.log(`Paso ${i}: ${capitalInicial}`)
    resultado = ((capitalInicial*(tasaInteres/100))+capitalInicial)
    capitalInicial = Math.round(resultado)
    
}
console.log(`Su Saldo total es de : ${resultado}`)
