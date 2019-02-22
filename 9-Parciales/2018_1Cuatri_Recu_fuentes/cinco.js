function mostrar()
{
var precio;
var paquete;
var TipoDePago;
var descuento;
var precioFinal;


precio=prompt("Ingrese precio");
TipoDePago=prompt("Ingrese metodo de pago");
paquete=prompt("Eliga su paquete");

precio=parseInt(precio);
/**/

switch(TipoDePago)
{
	case "mercadopago":
	case "tarjeta Visa":
		descuento=90;
	break

	case "payPal":		
		switch(paquete)
		{
			case "todoIncluido":
				descuento=75;
			break;
			
			default:
				descuento=85;
			break;
		}	
	break
	case "efectivo":

		switch(paquete)
		{
			case "todoIncluido":
				descuento=65;
			break;
			case "SoloDesayuno":
				descuento=70;
			break
			default:
				descuento=80;
			break;
		}

	break

	default:
	descuento=95
	break
}





precioFinal=(precio * descuento) /100;
alert("El precio es " + precioFinal);
}
