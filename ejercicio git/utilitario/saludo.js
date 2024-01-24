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

