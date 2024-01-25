calcularValorDescuento=function(monto,porcentajeDescuento){
    let valorDescuento=(monto*porcentajeDescuento)/100;
    return valorDescuento
}
calcularIVA=function(monto){
let iva=(monto*12)/100;
let totaliva=iva.toFixed(2);
return totaliva
}
calcularSubtotal=function(precio,cantidad){
let subtotal=precio*cantidad;
return subtotal
}
calcularTotal=function(subtotal,descuento,iva){
let valortotal=subtotal-descuento+iva;
subtotal=calcularSubtotal(precio,cantidad);
descuento=calcularValorDescuento(monto,porcentajeDescuento);
iva=calcularIVA(monto);
return valortotal
}

