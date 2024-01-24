saludar=function(){
    let nombre=recuperartexto('txtnombre');

    let apellido=recuperartexto('txtapellido');

    let edad=recuperarint('EDAD');

    let estatura=recuperarfloat('ESTATURA');

    let mensajebienvenida="Bienvenido "+nombre+" "+apellido;

    mostrartexto("resultado",mensajebienvenida);
    mostrarimagen('imagen','./imagenes/saludo.png');
    mostrartextoencaja('txtnombre','');
}

mostrartexto=function(idcomponente,mensaje){
    let componente;
    componente=document.getElementById(idcomponente);
    componente.innerText=mensaje;

        
}
mostrarimagen=function(idcomponente,rutaimagen){
    let componente;
    componente=document.getElementById(idcomponente);
    componente.src=rutaimagen;
}
mostrartextoencaja=function(idcomponente,mensaje){
    let componente;
    componente=document.getElementById(idcomponente);
    componente.value=mensaje;
}
recuperarint=function(idcomponente){
    let int=recuperartexto(idcomponente);
    let valorentero=parseInt(int);
    return valorentero;
}

recuperarfloat=function(idcomponente){
    let float=recuperartexto(idcomponente);
    let valorfloat=parseFloat(float);
    return valorfloat;
}


recuperartexto=function(idcomponente){
    let cmpcomponente;
    let valoringresado;
    cmpcomponente=document.getElementById(idcomponente);
    valoringresado=cmpcomponente.value;
    return valoringresado;
   
}