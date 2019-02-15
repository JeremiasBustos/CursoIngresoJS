function mostrar()
{

var precio;
var propina;
var precioMasPropina;
var iva;
var precioTotal;

precio=prompt("Ingresar precio");

precio=parseInt(precio);

propina=precio * .10;

precioMasPropina=precio + propina;

iva=precioMasPropina * .21

precioTotal=precioMasPropina - iva;

alert("El precio es " + precio + ", mas la propina, el precio es " + precioMasPropina + " el precio con la propina y sin IVA es " + precioTotal );


}
