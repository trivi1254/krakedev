calcularpromedio=function(n1,n2,n3){
let sumanotas=n1+n2+n3;
let promedio=sumanotas/3;

return promedio
}
mostrarresultado=function(componente){
    if(componente<5&&componente>0){
        let resultado=document.getElementById('ps');
            resultado.innerText='REPROBADO!!';
        let imagen=cambiarImagen("imagen","./imagenes/fail-failed.gif");
    }else if(componente>=5&&componente<=8){
        let imagen=cambiarImagen("imagen","./imagenes/200w.gif"); 
        let resultado=document.getElementById('ps');
            resultado.innerText='BUEN TRABAJO!!!';  

    }else if(componente>8&&componente<=10){
        let imagen=cambiarImagen("imagen","./imagenes/EC.gif"); 
        let resultado=document.getElementById('ps');
            resultado.innerText='EXELENTE TRABAJO,FELICIDADES!!!'; 
    }else{
        let imagen=cambiarImagen("imagen","./imagenes/ERROR.gif"); 
        let resultado=document.getElementById('ps');
            resultado.innerText='DATOS INCORRECTOS'; 
    }
}
