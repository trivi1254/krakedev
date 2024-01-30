calculartasainteres=function(ingresoanual){
let tasaintereses;
let ingreso=parseFloat(ingresoanual);
if(ingreso<300000){
    tasaintereses=16;
}else if(ingreso>300000&&ingreso<500000){
    tasaintereses=15;

}else if(ingreso>500000&&ingreso<1000000){
    tasaintereses=14;
}else if(ingreso>1000000&&ingreso<2000000){
    tasaintereses=13;
}else if(ingreso>=2000000){
    tasaintereses=12;
}
 return tasaintereses

}
calcularcapacidaddepago=function(edad,ingresos,egresos){
    let cuotamensual;
    let porcentaje;
    let ed=parseInt(edad);
    let sd=parseInt(ingresos);
    let fd=parseInt(egresos);
    if(ed>50){
        porcentaje=sd-fd*3;
        cuotamensual=porcentaje;
    }else if(ed<=50){
        porcentaje=sd-fd*4;
        cuotamensual=porcentaje; 
    }
    return cuotamensual
}
calcularvalordescuento=function(precio,cantidad){
let descuento;
let total;
let valor;
let pr=parseFloat(precio);
let can=parseInt(cantidad);
if(cantidad<3){
console.log('NO HAY DESCUENTO')
}else if(can>3&&can<5){
    valor=pr*can;
    descuento=(valor*2)/100;
    total=descuento;
}else if(can>6&&can<11){
    valor=pr*can;
    descuento=(valor*3)/100;
    total=descuento;
}else if(can>=12){
    valor=pr*can;
    descuento=(valor*4)/100;
    total=descuento;
}
return total
}
determinarcolesterol=function(nivelcolesterol){
let colesterol=parseFloat(nivelcolesterol);
let nivel;
if(colesterol<100){
    nivel="Su nivel de colesterol es optimo (lo mejor para la salud)";

}else if(colesterol>100&&colesterol<129){
    nivel="Su nivel de colesterol es casi optimo";

}else if(colesterol>130&&colesterol<159){
   nivel="Su nivel de colesterol esta al limite del rango normal";
}else if(colesterol>160&&colesterol<189){
    nivel=" Tiene el colesterol alto";
}else if(colesterol>=190){
    nivel="tiene el colesterol muy alto"
}
 return nivel
}
validarclave=function(clave){
if(clave>=8&&clave<16){
    return true;
}else{
    return false;
}

}
esmayuscula=function(caracter){
    let code=caracter.charCodeAt(0);
    if(code>=84&&code<=85){
        return true;
    }else{
        return false;
    }
}
esminuscula=function(caracter){
    let code=caracter.charCodeAt(0);
    if(code<=115&&code>=105){
        return true
    }else{
        return false
    }
}
esdigito=function(caracter){
    let code=caracter.charCodeAt(0);
if(code<=115&&code>=105){
    return true
}else{
    return false
}
}
darpermiso=function(notamatematica,notafisica,notageometria){
    let notam=notamatematica;
    let notaf=parseFloat(notafisica);
    let notag=parseFloat(notageometria);
    if(notam>90||notaf>90||notag>90){
        return true;

    }else{
        return false;
    }

}
otorgarpermiso=function(notamatematica,notafisica,notageometria){
    let notam=notamatematica;
    let notaf=parseFloat(notafisica);
    let notag=parseFloat(notageometria);
    if(notam>90||notaf>90&&notag>90){
        return true;

    }else{
        return false;
    }

}
dejarsalir=function(notamatematica,notafisica,notageometria){
    let notam=notamatematica;
    let notaf=parseFloat(notafisica);
    let notag=parseFloat(notageometria);
    if(notam>90&&notaf>90||notag>90&&notaf>notam){
        return true;

    }else{
        return false;
    }

}