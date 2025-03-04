//has un programa donde el usuario ingrese un capital inicial, el porcentaje de interes diario, y el ciclo de reinversión en días. El programa debe arrogar el resultado y el paso a paso.

var capitalInicial,tasaInteres,cicloInversion,numeroCiclos,total, ganaciaInteresCiclo = 0

/*

let capitalInicial = parseFloat(prompt("Digite el capital inicial ($): "));
console.log(capitalInicial);

let tasaInteres = parseFloat(prompt("El la tasa de interes diario: "));
console.log(tasaInteres);

let nroDiasCiclo = parseInt(prompt('Ciclo de inversión (Días): '))
console.log(nroDiasCiclo);

let nroCiclos = parseInt(prompt("Número de ciclos a calcular: "));
console.log(nroCiclos);

console.log(`Numero de ciclos a realizar es de: ${nroCiclos}`)
*/



//creamos un llamado a la accion click con el boton calcular.

document.getElementById('click').addEventListener('submit', (event)=> {
    //para eliminar cualquier info anterior
    event.preventDefault()

    //capturamos los dato de los campos del input
    capitalInicial = document.getElementById('capital').value
    tasaInderes = document.getElementById('tasaInteres').value
    cicloInversion = document.getElementById('cicloInversion').value
    numeroCiclos = document.getElementById('numeroCiclos').value


for(let i = 0; i <= numeroCiclos; i++){

    console.log(`Interes del ciclo ${i}: ${ganaciaInteresCiclo}`)
    console.log(`Paso ${i}: ${capitalInicial}`)
    ganaciaInteresCiclo = (capitalInicial*(tasaInteres/100))*nroDiasCiclo
    total = ganaciaInteresCiclo + capitalInicial
    capitalInicial = Math.round(total)
}
console.log(`Su total es de: ${total}`)


    //creamos un elemento para mostrar el resultado.
    const resultado = document.createElement('h2')
    resultado.textContent = `El resultado es: ${total}`

    document.getElementById('container').innerHTML = ""; // Limpiar antes de agregar
    document.getElementById('container').appendChild(h2);

})

