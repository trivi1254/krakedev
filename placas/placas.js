validarplaca = function () {
    
    let cajatexto = recuperarTexto("text");
    let erroresestructura = validarestructura(cajatexto);
   
    if (erroresestructura == null) {
        cambiarTexto('errores', 'ESTRUCTURA valida')
        let obtener=obtenerprovincia(cajatexto);
        if(obtener!=null){
            cambiarTexto('provincia',obtener)
        }else{
            cambiarTexto('provincia','Provincia Incorrecta')
        }
        let vehiculo=obtenertipodevehiculo(cajatexto);
        if(vehiculo!==null){
            cambiarTexto("vehic",vehiculo)
        }else{
            cambiarTexto('vehic','Vehiculo incorrecto')
        }
        let diapico=obtenerdiapicoyplaca(cajatexto);
        if(diapico!==null){
            cambiarTexto('picoyplaca',diapico)
        }
    } else {
        cambiarTexto('errores', 'ESTRUCTURA incorrecta')
        cambiarTexto('error1',erroresestructura)

    }
}
limpiar=function(){
    let caja=document.getElementById('text');
        caja.value='';
    cambiarTexto('errores','')
    cambiarTexto('error1','')
    cambiarTexto('provincia','')
    cambiarTexto('vehic','')
    cambiarTexto('picoyplaca','')
   
}