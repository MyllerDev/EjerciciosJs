let numeroInicial = parseInt(prompt("Digite el numero inicial: "));
let numeroFinal = parseInt(prompt("Digite el numero final: "));



function imprimirNumero(numeroInicial, numeroFinal) {

  if (numeroInicial < numeroFinal) {
    console.log("Iteraciones con el ciclo for: ");
    for (i = numeroInicial; i <= numeroFinal; i++) {
      console.log(i);
    }
  }else{
    console.log('Valores invalidos, vuelva a intentarlo...')
  }

  if(numeroInicial < numeroFinal){
    console.log('Iteraciones con ciclo While')
    while(numeroInicial <= numeroFinal){
        console.log(numeroInicial)
        numeroInicial++;
    }
  }
}

imprimirNumero(numeroInicial, numeroFinal);
