validarplaca = function () {
    
    let cajatexto = recuperarTexto("text");
    let erroresestructura = validarestructura(cajatexto);
   
    if (erroresestructura == null) {
        cambiarTexto('errores', 'ESTRUCTURA valida')
    } else {
        cambiarTexto('errores', 'ESTRUCTURA incorrecta')
        cambiarTexto('error1',erroresestructura)

    }
}