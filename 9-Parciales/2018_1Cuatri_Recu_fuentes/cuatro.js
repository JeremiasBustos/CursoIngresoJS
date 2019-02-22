function mostrar()
{
var numeroUno;
var numeroDos;
var numeroTres;
var numeroCuatro;
var numeroMasAlto;
var suma;
var mensaje;
var descuento;
var recargo;
var precioFinal;

numeroUno=prompt("Ingrese numero uno");
numeroDos=prompt("Ingrese numero dos");
numeroTres=prompt("Ingrese numero tres");
numeroCuatro=prompt("Ingrese numero cuatro");

numeroUno=parseInt(numeroUno);
numeroDos=parseInt(numeroDos);
numeroTres=parseInt(numeroTres);
numeroCuatro=parseInt(numeroCuatro);

suma=numeroUno + numeroDos + numeroTres + numeroCuatro;

if(numeroUno > numeroDos &&  numeroUno > numeroTres && numeroUno > numeroCuatro)
{
	numeroMasAlto=numeroUno;

}else
	if(numeroDos > numeroTres && numeroDos > numeroCuatro)
		{
			numeroMasAlto=numeroDos;
		}else
			if(numeroTres > numeroCuatro )
			{
				numeroMasAlto=numeroTres;
			}else
				{
					numeroMasAlto=numeroCuatro
				}	





					if(suma > 100)
						{
							descuento=90;
		 
						}else
							if(suma > 50 && suma < 100)
								{
									descuento=95;
			
			 

									}else
										if(suma < 50)
											{
												descuento=110
				
			  

											}	 

	precioFinal=(suma * descuento) /100;
	alert("El numero mas alto es " + numeroMasAlto + " y el precio final es " + precioFinal);

}
