calcularpromedionotas=function(){
    let nota1=recuperarTexto("nota1");
    let nota2=recuperarTexto("nota2");
    let nota3=recuperarTexto("nota3");
    let n1=parseFloat(nota1);
    let n2=parseFloat(nota2);
    let n3=parseFloat(nota3);
    let promedio=calcularpromedio(n1,n2,n3);
    let decimales=promedio.toFixed(2);
    cambiarTexto("total",decimales);
    mostrarresultado(decimales);


}