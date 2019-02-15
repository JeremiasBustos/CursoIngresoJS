function mostrar()
{
var libros;
var precio;
var descuento;
var precioConDescuento10;
var precioConDescuento15;
var formaDePago;
var precioDeCompraConTarjeta

libros=prompt("Ingrese cantidad de libros");
precio=prompt("Ingrese precio");
formaDePago=prompt("Efectivo/Tarjeta");

precio=parseInt(precio);

if(libros >= 2 && formaDePago == "efectivo")
{
	descuento = precio * .10;
	precioConDescuento10=precio - descuento
	alert("el precio es " + precioConDescuento10);

}	
if(precio > 2000 && libros >= 1 && formaDePago == "efectivo")
{

	descuento=precio * 15 / 100;
	precioConDescuento15=precio - descuento;
	alert("el precio es " + precioConDescuento15);	
}	
else
{


}



}
