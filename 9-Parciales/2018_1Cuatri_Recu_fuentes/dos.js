function mostrar()
{
  var compra;
  var compraConDescuento;
  var descuento;
  var iva;
  var precioFinal;

  compra=document.getElementById("elNombre").value;

  compra=parseInt(compra)

  descuento=compra * .10

  compraConDescuento=compra - descuento;

  iva=compraConDescuento * .21;

  precioFinal=compraConDescuento + iva;

  alert("Tu compra es de $" + compra +  ", tenes un descuento del 10% queda en $" + compraConDescuento  + " mas el IVA es $ " + precioFinal)


}
