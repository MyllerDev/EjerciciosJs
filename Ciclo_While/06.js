// imprimir los numero impares de hasta un número ingresado

let limite = parseInt(prompt('Dame un número'))
let corre = 0;

while(corre <= limite){
    if(corre%2 != 0){
        console.log(corre)
    }
    corre++;
}