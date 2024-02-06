calcularValorDescuento = function (monto, porcentajeDescuento) {
    let valorDescuento = (monto * porcentajeDescuento) / 100;
    return valorDescuento
}
calcularIVA = function (monto) {
    let iva = (monto * 12) / 100;
    let totaliva = iva.toFixed(2);
    let total = parseFloat(totaliva);
    return total
}
calcularSubtotal = function (precio, cantidad) {
    let subtotal = precio * cantidad;
    return subtotal
}
calcularTotal = function (subtotal, descuento, iva) {
    let valortotal = subtotal - descuento + iva;
    return valortotal
}
calculardescuentoporporcion = function (subtotal, cantidad) {
    let valorDescuento;
    if (cantidad < 3) {
        valorDescuento = (subtotal * 0) / 100;
    } else if (cantidad >= 3 && cantidad <= 5) {
        valorDescuento = (subtotal * 3) / 100;
    } else if (cantidad >= 6 && cantidad <= 11) {
        valorDescuento = (subtotal * 4) / 100;
    } else if (cantidad >= 12) {
        valorDescuento = (subtotal * 5) / 100;
    }
    return valorDescuento
}
esproductovalido = function (producto, idcomponente) {
    let hayerrores = false;
    if (producto.length >= 10) {
        mostrarTexto(idcomponente, "El nombre del producto no puede tener mas de 10 caracteres");
        hayerrores = true;
    } else if (producto == null || producto == "") {
        mostrarTexto(idcomponente, "CAMPO OBLIGATORIO");
        hayerrores = true;
    }
    if(hayerrores == false){
        mostrarTexto(idcomponente, "")
        
    }

    return !hayerrores;
}
escantidadvalida = function (cantidad, idcomponente) {
    let hayerrores = false;
    if (cantidad<0 || cantidad >100) {
        mostrarTexto(idcomponente, "La cantidad debe ser un numero entero entre 0 a 100");
        hayerrores = true;
    } else if (isNaN(cantidad)) {
        mostrarTexto(idcomponente, "CAMPO OBLIGATORIO");
        hayerrores = true;
    }
    if(hayerrores == false){
        mostrarTexto(idcomponente, "")
        
    }

    return !hayerrores;
}
espreciovalido = function (precio, idcomponente) {
    let hayerrores = false;
    if (precio < 0 || precio > 50) {
        mostrarTexto(idcomponente, "El precio debe ser un numero entre 0 y 50");
        hayerrores = true;
    } else if (isNaN(precio)) {
        mostrarTexto(idcomponente, "CAMPO OBLIGATORIO");
        hayerrores = true;
    }
    if(hayerrores == false){
        mostrarTexto(idcomponente, "")
        
    }
    return !hayerrores;
}

