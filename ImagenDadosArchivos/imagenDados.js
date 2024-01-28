let puntaje=0;
let lanzamientos=5;
jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarcara(resultado);
    puntos(resultado);
    lanzamiento();
}
mostrarcara=function(numero){
    if(numero==1){
        let dado1=cambiarImagen("IMG","dados1.png");
    }else if(numero==2){
        let dado2=cambiarImagen("IMG","dados2.png");
    }else if(numero==3){
        let dado3=cambiarImagen("IMG","dados3.png");
    }else if(numero==4){
        let dado4=cambiarImagen("IMG","dados4.png");
    }else if(numero==5){
        let dado5=cambiarImagen("IMG","dados5.png");
    }else if(numero==6){
        let dado6=cambiarImagen("IMG","dados6.png");
    }
}
puntos=function(numero){
    puntaje=puntaje+numero
    cambiarTexto("punto",puntaje);
    if(puntaje>19){
        let mensaje=document.getElementById("datos1");
            mensaje.textContent="GANASTEEEE!!!!"
    }
}
lanzamiento=function(){
    lanzamientos=lanzamientos-1;
    cambiarTexto("punto1",lanzamientos);
    if(lanzamientos==0){
        let mensaje=document.getElementById("datos1");
            mensaje.textContent="GAME OVER"
            limpiar();
        }
}
limpiar=function(){    
 let limpiar=0;
 let lanza=5;
    cambiarTexto("punto",limpiar);
    cambiarTexto("punto1",lanza);
    cambiarImagen("IMG","")
}
lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}