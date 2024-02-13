validarplaca = function () {
    
    let cajatexto = recuperarTexto("text");
    let erroresestructura = validarestructura(cajatexto);
   
    if (erroresestructura == null) {
        cambiarTexto('errores', 'ESTRUCTURA valida')
        let obtener=obtenerprovincia(cajatexto);
        if(obtener!=null){
            cambiarTexto('error1',obtener)
        }else{
            cambiarTexto('error1','Provincia Incorrecta')
        }
    } else {
        cambiarTexto('errores', 'ESTRUCTURA incorrecta')
        cambiarTexto('error1',erroresestructura)

    }
}