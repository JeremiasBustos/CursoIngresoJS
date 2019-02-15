function mostrar()
{
var libros;
var precio;
var descuento;
var precioConDescuento10;
var precioConDescuento15;
var usarTarjeta;
var compraConTarjeta;
var precioDeCompraConTarjeta

libros=prompt("Ingrese cantidad de libros");
precio=prompt("Ingrese precio");
usarTarjeta=prompt("Usar tarjeta Si/No");

precio=parseInt(precio);

if(libros >= 2)
{
descuento = precio * .10;
precioConDescuento10=precio - descuento
alert("El precio es " + precioConDescuento10);

}	
else if(precio > 2000 && libros >= 1)
{

	descuento=precio * 15 / 100;
	precioConDescuento15=precio - descuento;
	alert("El precio es " + precioConDescuento15);	
}	
else if(usarTarjeta == "Si" && usarTarjeta == "si")
{

compraConTarjeta = precio * .10
precioDeCompraConTarjeta = precio + compraConTarjeta;
alert("El precio es " + precioDeCompraConTarjeta);

}



}
