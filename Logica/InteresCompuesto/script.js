document.getElementById('btnCalcular').addEventListener('click', () => {
    // Obtener valores de los inputs y convertirlos a número
    let capitalInicial = parseFloat(document.getElementById('capitalInicial').value);
    let tasaInteres = parseFloat(document.getElementById('tasaInteres').value);
    let cicloInversion = parseInt(document.getElementById('cicloInversion').value);
    let numeroCiclos = parseInt(document.getElementById('numeroCiclos').value);

    // Validar que los valores sean correctos
    if (isNaN(capitalInicial) || isNaN(tasaInteres) || isNaN(cicloInversion) || isNaN(numeroCiclos)) {
        alert("Por favor, ingresa valores numéricos válidos.");
        return;
    }

    let total = capitalInicial;
    let gananciaInteresCiclo = 0;

    // Limpiar tabla antes de agregar nuevos valores
    let tablaResultados = document.getElementById('tablaResultados');
    tablaResultados.innerHTML = "";

    for (let i = 0; i < numeroCiclos; i++) {
        // Calcular interés del ciclo
        gananciaInteresCiclo = (total * (tasaInteres / 100)) * cicloInversion;
        total += gananciaInteresCiclo;

        // Agregar fila a la tabla
        let fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${i+1}</td>
            <td>$${capitalInicial.toFixed(2)}</td>
            <td>$${gananciaInteresCiclo.toFixed(2)}</td>
            <td>$${total.toFixed(2)}</td>
        `;
        tablaResultados.appendChild(fila);

        // Actualizar capital para el siguiente ciclo
        capitalInicial = total;
    }
});
