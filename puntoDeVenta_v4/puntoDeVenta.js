calcularValorTotal = function(){
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto;
    let cantidad;
    let porcentajeDescuento;
    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    let resumen;
    //1. Recuperar el nombre del producto como String
    nombreProducto=recuperarTexto("txtProducto");
    //2. Recuperar el precio como float
    precioProducto=recuperarFloat("txtPrecio");
    //3. Recuperar cantidad como int
    cantidad=recuperarInt("txtCantidad");
    //4. Recuperar el porcentaje de descuento como int
    porcentajeDescuento=recuperarInt("txtPorcentajeDescuento");
    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    valorSubtotal=calcularSubtotal(precioProducto,cantidad);
    //5. Mostrar valorSubtotal en el componente lblSubtotal
        /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10
                Subtotal esperado: 54
            Si el caso de prueba es exitoso, hacer un commit
         */
            mostrarTexto("lblSubtotal",valorSubtotal);
    //6. Invocar a calcularDescuento y lo que devuelve guardar en la variable valorDescuento
    valorDescuento=calcularValorDescuento(valorSubtotal,porcentajeDescuento);
    //7. Mostrar el resultado en el componente lblDescuento
        /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
                Descuento esperado: 5.4
            Si el caso de prueba es exitoso, hacer un commit
         */
            mostrarTexto("lblDescuento",valorDescuento);
    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
    valorIVA=calcularIVA(valorSubtotal-valorDescuento);
	//   El IVA debe calcularse sobre el valor del subtotal menos el descuento
    //9. Mostrar el resultado en el componente lblValorIVA    
    /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
					--valorSubtotal: 54
					--descuento:5.4
					--valorSubtotal - descuento: 48.6
                IVA esperado: 5.832
            Si el caso de prueba es exitoso, hacer un commit
        */
            mostrarTexto("lblValorIVA",valorIVA);
    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA);
    //11. Mostrar el resultado en el componente lblTotal
     /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
					--valorSubtotal: 5.4
					--descuento: 5.4
					--IVA: 5.832
                Total esperado: 54.432
            Si el caso de prueba es exitoso, hacer un commit
        */
            mostrarTexto("lblTotal",valorTotal);
    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
        /*
            Ejemplo: 
                Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
            Si funciona, hacer un commit
        */ 
            resumen="Valor a pagar por "+cantidad+" "+nombreProducto+" "+"con"+" "+valorDescuento+" de descuento : USD "+valorTotal;
            mostrarTexto("lblresumen",resumen);
}   
limpiar=function(){
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
        let producto=document.getElementById("txtProducto");
        let precio=document.getElementById("txtPrecio");
        let cantidad=document.getElementById("txtCantidad");
        let descuento=document.getElementById("txtPorcentajeDescuento");
        let subtotal=document.getElementById("lblSubtotal");
        let porcentajedescuento=document.getElementById("lblDescuento");
        let iva=document.getElementById("lblValorIVA");
        let total=document.getElementById("lblTotal");
        let resumentotal=document.getElementById("lblresumen");
        producto.value = "0";
        precio.value = "0";
        cantidad.value = "0";
        descuento.value = "0";
        subtotal.innerText = "0";
        porcentajedescuento.innerText= "0.0";
        iva.innerText = "0.0";
        total.innerText= "0.0";
        resumentotal.innerText= "0.0";
        

}
/* SI TODO FUNCIONA, HACER UN PUSH */