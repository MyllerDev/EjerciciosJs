//pedir el nombre al usuario y devolverle un saludo

let nombre = prompt("Digite su nombre:")

// funtion - nombre del funcition = (parametros) =>instrucciones
const saludar = (nombre) => `Hola ${nombre}`

console.log(saludar(nombre))