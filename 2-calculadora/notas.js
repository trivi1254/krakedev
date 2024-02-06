calcularPromedio = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

calcular1 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    nota1 = recuperarFloat("txtNota1");
    if (isNaN(nota1)) {
        alert("ERROR");

    } else {
        nota2 = recuperarFloat("txtNota2");
        if (isNaN(nota2)) {
            alert('ERROR');
        } else {
            nota3 = recuperarFloat("txtNota3");
            if (isNaN(nota3)) {
                alert("ERROR");
            } else {
                console.log('NOTA 1 , NOTA 2 Y NOTA 3 SON NUMEROS VALIDOS');
            }
        }
    }


    resultado = calcularPromedio(nota1, nota2, nota3);
    resultadoFormato = resultado.toFixed(2);
    mostrarTexto("lblResultado", resultadoFormato);
}




calcular2 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let exixteError = false;
    nota1 = recuperarFloat("txtNota1");
    if (isNaN(nota1)) {
        mostrarTexto("lblError1", 'DEBE INGRESAR UN NUMERO');
        exixteError = true;
    } else {
        mostrarTexto("lblError1", "");
    }
    nota2 = recuperarFloat("txtNota2");
    if (isNaN(nota2)) {
        mostrarTexto("lblError2", 'DEBE INGRESAR UN NUMERO');
        exixteError = true;
    } else {
        mostrarTexto("lblError2", "");
    }
    nota3 = recuperarFloat("txtNota3");
    if (isNaN(nota3)) {
        mostrarTexto("lblError3", 'DEBE INGRESAR UN NUMERO');
        exixteError = true;
    } else {
        mostrarTexto("lblError3", "");
    }
    if (exixteError == false) {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    }
}
calcular = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let exixteError = false;
    nota1 = recuperarFloat("txtNota1");
    nota2 = recuperarFloat("txtNota2");
    nota3 = recuperarFloat("txtNota3");
    if (esnotavalida(nota1, "lblError1") & esnotavalida(nota2, "lblError2") & esnotavalida(nota3, "lblError3")) {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    } else {
        mostrarTexto("lblResultado", "0.0");
    }
}
esnotavalida = function (nota, idcomponente) {
    let hayerror = false;
    if (isNaN(nota)) {
        mostrarTexto(idcomponente, 'DEBE INGRESAR UN NUMERO');
        hayerror = true;
    }    
    if (nota<0 || nota>10) {
        mostrarTexto(idcomponente, 'EL NUMERO DEBE ESTAR ENTRE CERO Y DIEZ');
        hayerror=true;
    }
    if(hayerror==false){
        mostrarTexto(idcomponente,'');
    }
    return !hayerror;
}
