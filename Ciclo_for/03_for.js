// Escribir un programa que calcule la suma de los primero n nuúeros enteros. el valor de n debe ser proporcionada por el usuario


let limite = parseInt(prompt('Digite un numero: '));
let suma = 0;

for(let i = 0; i <= limite; i++){
    suma +=i;
}

console.log(`El total de la suma es: ${suma}`)



// //pedimos el numero
// let n = parseInt(prompt('Ingrese un número'));

// //inicializamos la variable suma
// let suma = 0;

// //usamos el bucle for para calcular la suma
// for(let i = 1; i <=n ; i++){
//     suma += i;
// }

// //mostramos en consola
// console.log(`el resultado de la suma de los primeros ${n} numero es: ${suma}`)

