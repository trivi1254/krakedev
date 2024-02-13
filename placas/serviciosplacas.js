
validarestructura = function (placa) {
    let error ='';
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
        
        error ='El 2er, caracter debe ser una letra mayuscula';
        
    }
    if (!(placa3)) {
      
        error = 'El 3er, caracter debe ser una letra mayuscula';
        
    }

    if (!(placa4)) {
        
        error = 'El 4to caracter debe ser un guion ';
       
      
    }
    if (!(placa5)) {
        
        error ='El 5to caracter debe ser un digito ';
       
    }
    if (!(placa6)) {
        
        error ='El 6to caracter debe ser un digito ';
        
    }
    if (!(placa7)) {
        error = 'El 7to caracter debe ser un digito ';
        
    }
    if (longitud==8&&!(placa8)) {
        
        error =  'el 8vo caracter debe ser un digito';
        
    }
    if(error>='A'&&error<='Z'){
        return error;
    }else{
       return null  
    }
    
   
    
}







