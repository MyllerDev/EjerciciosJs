
//VERIFICAR SI UNA PALABRA ES UN PALINDROMO (SE LEE IGUAL INVERTIDA (RADAR))

let texto = 'ejemeje'

//función para verificar si es palíndromo

const esPalindromo = (texto) =>{

    //convertimos en minusculas y eliminarmos espacios y caracteres
    let textoLimpio = texto.toLowerCase().replace(/[\s.,!?]/g, '')

    //Convierte la cadena en un array de caracteres.´
    // Invierte el orden del array.
    //Une los elementos del array en una sola cadena.
    let textoInvertido = texto.split('').reverse('').join('')

    //creamos la condición para validar el caso
    if(textoLimpio === textoInvertido){
        console.log(`La palabra ${textoLimpio} es un palíndromo.`)
    }else{
        console.log(`La palabra ${textoLimpio} NO un palíndromo.`)

    }
}

esPalindromo(texto)