//calcular el factorial de un úmero dado por el usuario, recuerda que el factorial de un número n es el producto de todos los números de 1 hasta n


//pedimos el valor al usuario
let n = parseInt(prompt('Digite un número: '));

//creamos una variable para almacenar el valor de factorial de n
let facto = 1;

//con un for resolveremos el problema.
for (let i = 1; i <=n ; i++){
    facto *= i;
}

//mostramos el valor en consola.
console.log(`el factorial del número ${n} es : ${facto}`)