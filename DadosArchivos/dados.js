jugar=function(){
    let aleatorio=lanzardado();
    cambiarTexto("lblNumero",aleatorio);
    let mostrar=mostrarresultado(aleatorio);
    
}
lanzardado=function(){
    let aleatorio;
    let multiplicar;
    let sindecimal;
    let valordado;
    aleatorio=Math.random();
    multiplicar=aleatorio*6;
    sindecimal=parseInt(multiplicar);
    valordado=sindecimal+1;

    return valordado
}
mostrarresultado=function(componente){
    if(componente>3){
    let lbl=mensaje();
    }else{
    let lbl2=mensaje2();
}
}
mensaje=function(){
    let mensaje=document.getElementById("MOSTRAR");
    mensaje.textContent="EL NUMERO ES MAYOR A 3";
    mensaje.textContent="HAS GANDO FELICIDADES"; 
}
mensaje2=function(){
    let mensaje=document.getElementById("MOSTRAR");
    mensaje.textContent="EL NUMERO NO ES MAYOR A 3";
    mensaje.textContent=" HAS PERDIDO, INTENTALO DE NUEVO";  
}