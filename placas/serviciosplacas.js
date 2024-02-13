
validarestructura = function (placa) {
    let error = '';
    let longitud = placa.length;
    let placa1 = esmayusculas(placa[0]);
    let placa2 = esmayusculas(placa[1]);
    let placa3 = esmayusculas(placa[2]);
    let placa4 = esguion(placa[3]);
    let placa5 = esdigito(placa[4]);
    let placa6 = esdigito(placa[5]);
    let placa7 = esdigito(placa[6]);
    let placa8 = esdigito(placa[7]);

    if (!(longitud == 7 || longitud == 8)) {
        error = 'La placa debe tener 7 u 8 caracteres';

    }
    if (!(placa1)) {

        error = 'El 1er, caracter debe ser una letra mayuscula';


    }
    if (!(placa2)) {

        error = 'El 2er, caracter debe ser una letra mayuscula';

    }
    if (!(placa3)) {

        error = 'El 3er, caracter debe ser una letra mayuscula';

    }

    if (!(placa4)) {

        error = 'El 4to caracter debe ser un guion ';


    }
    if (!(placa5)) {

        error = 'El 5to caracter debe ser un digito ';

    }
    if (!(placa6)) {

        error = 'El 6to caracter debe ser un digito ';

    }
    if (!(placa7)) {
        error = 'El 7to caracter debe ser un digito ';

    }
    if (longitud == 8 && !(placa8)) {

        error = 'el 8vo caracter debe ser un digito';

    }
    if (error >= 'A' && error <= 'Z') {
        return error;
    } else {
        return null
    }



}
obtenerprovincia = function (placa) {
    let provincia = {
        "A": "Azuay",
        "B": "Bolívar",
        "U": "Cañar",
        "C": "Carchi",
        "X": "Cotopaxi",
        "H": "Chimborazo",
        "O": "El Oro",
        "E": "Esmeraldas",
        "W": "Galápagos",
        "G": "Guayas",
        "I": "Imbabura",
        "L": "Loja",
        "R": "Los Ríos",
        "M": "Manabí",
        "V": "Morona Santiago",
        "N": "Napo",
        "S": "Pastaza",
        "P": "Pichincha",
        "K": "Sucumbíos",
        "Q": "Orellana",
        "T": "Tungurahua",
        "Z": "Zamora Chinchipe",
        "Y": "Santa Elena",
    }
    let primeraletra = placa.charAt(0);

    return provincia[primeraletra] || null
}
obtenertipodevehiculo = function (placa) {
    let vehiculos = {
        "A": "VEHICULOS COMERCIALES (Como taxis o autobuses )",
        "Z": "VEHICULOS COMERCIALES (Como taxis o autobuses )",
        "E": "VEHICULOS GUBERNAMENTALES",
        "X": "VEHICULOS DE USO OFICIAL",
        "S": "VEHICULOS DEL GOBIERNO PROVINCIAL",
        "M": "VEHICULOS MUNICIPALES",
        "B": "VEHICULOS PARTICULARES (privados)",
        "C": "VEHICULOS PARTICULARES (privados)",
        "N": "VEHICULOS PARTICULARES (privados)",
        "O": "VEHICULOS PARTICULARES (privados)",
        "P": "VEHICULOS PARTICULARES (privados)",
        "Q": "VEHICULOS PARTICULARES (privados)",
        "R": "VEHICULOS PARTICULARES (privados)",
        "G": "VEHICULOS PARTICULARES (privados)",
        "H": "VEHICULOS PARTICULARES (privados)",
        "I": "VEHICULOS PARTICULARES (privados)",
        "K": "VEHICULOS PARTICULARES (privados)",
        "L": "VEHICULOS PARTICULARES (privados)",
        "T": "VEHICULOS PARTICULARES (privados)",
        "U": "VEHICULOS PARTICULARES (privados)",
        "V": "VEHICULOS PARTICULARES (privados)",
        "Y": "VEHICULOS PARTICULARES (privados)",
        
    }
    let segletra = placa.charAt(1);
    return vehiculos[segletra] || null

}
obtenerdiapicoyplaca=function(placa){
    let dia={
        '1':'Lunes',
        '2':'Lunes',
        '3':'Martes',
        '4':'Martes',
        '5':'Miercoles',
        '6':'Miercoles',
        '7':'Jueves',
        '8':'Jueves',
        '9':'Viernes',
        '0':'Viernes',
    }
    let diaplaca= placa.charAt(7);
    return dia[diaplaca] || null

}



"Libre Circulacion Sabados , Domingos y Feriados"























