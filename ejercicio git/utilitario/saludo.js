saludar=function(){
    let nombre=recuperartexto('txtnombre');
    let apellido=recuperartexto('txtapellido');
}




recuperartexto=function(idcomponente){
    let cmpcomponente;
    let valoringresado;
    cmpcomponente=document.getElementById(idcomponente);
    valoringresado=cmpcomponente.value;
    return valoringresado;
   
}