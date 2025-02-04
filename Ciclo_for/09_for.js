// Pedimos al usuario que ingrese la altura del triángulo
const n = parseInt(prompt("Ingrese la altura del triángulo:"));

// Usamos un bucle for para imprimir el triángulo de asteriscos
for (let i = 1; i <= n; i++) {
  console.log('*'.repeat(i)); // Imprimir i asteriscos
}


//con el ciclo while:
// let i = 0;
// while(i < n){
//   console.log('*'.repeat(i))
//   i++;
// }