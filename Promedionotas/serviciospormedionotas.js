calcularpromedio=function(n1,n2,n3){
let sumanotas=n1+n2+n3;
let promedio=sumanotas/3;

return promedio
}
mostrarresultado=function(componente){
    if(componente>7){
        let imagen=cambiarImagen("imagen","./imagenes/200w.gif");
    }else{
        let imagen=cambiarImagen("imagen","./imagenes/fail-failed.gif");   
    }
}
