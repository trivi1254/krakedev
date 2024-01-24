saludar=function(){
    let nombre=recuperartexto('txtnombre');
    let apellido=recuperartexto('txtapellido');
    let edad=recuperarint('EDAD');
    let estatura=recuperarfloat('ESTATURA');
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