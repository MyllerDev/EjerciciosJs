// imprimir la tabla de multiplicar de un npumero proporsionado pro el usuario.


//Con el ciclo for:
let nro = parseInt(prompt('Digite un número'))
let cant = parseInt(prompt('Hasta que numero lo desea multiplicar?'))

for(let i = 0 ; i <= cant; i++){
    console.log(`${nro} x ${i} = ${nro * i}`)
}


//con el ciclo while:
// let valor = parseInt(prompt('Dame un numero'))
// let cantidadmulti = parseInt(prompt('Cantidad de veces a multiplicar'));
// let i =1;

// while(i <= cantidadmulti){
//     console.log(`${valor} * ${i} = ${valor * i}`)
//     i++;
// }