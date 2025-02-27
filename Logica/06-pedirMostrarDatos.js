
//CREA UN PROGRAMA QUE PIDA EL NUMERO DE DATOS QUE REQUIERE INGRESAR Y QUE LUEGO LOS PUEDA IR INGRESANDO UNO POR UNO, Y AL FINAL MOSTRAR LOS DATOS QUE USUARIO A INGRESADO.

let tamanoArreglo = parseInt(prompt('Digite el numero de valores: '))
let arreglo = []

function filtro (){
    let i=0
    console.log('La cantidad de valores ingresados es: ',tamanoArreglo)


    //FOR PARA PEDIR AL USUARIO LA CANTIDAD DE DATOS QUE DESEA INGRESAR
    for(i=0; i < tamanoArreglo; i++){
        let datos = parseInt(prompt('digite el numero: '+ (i+1)))
        arreglo.push(datos)

    } 

    //FOR PARA MOSTRAR EL ARREGLO DE DATOS INGRESADOS POR EL USUARIO
    for(let e = 0; e < tamanoArreglo; e++){
        console.log(`El valor ${e+1} es: ${arreglo[e]}`)

    }
       
}

filtro()
