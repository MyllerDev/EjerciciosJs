
let texto = 'hola mundo'


function contar (texto) {

    //eliminamos espacios
    let textoLimpio = texto.replace(/[\s.,!?]/g, '')
    console.log(textoLimpio.length)


    // Imprimir letra por letra
    for(i = 0; i < textoLimpio.length; i++){
        console.log([textoLimpio[i]])
    }
    return textoLimpio.length


}

contar(texto)
