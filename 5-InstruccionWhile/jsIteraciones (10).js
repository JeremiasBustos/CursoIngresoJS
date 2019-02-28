function mostrar()
{

	
	var contador;
	var respuesta;
	var sumaPositivos;
	var sumaNegativos;
	var numeroIngresado;
	var cantidadNegativos;
	var cantidadPositivos=0;
	var cantidadDeCeros=0;
	var promedioDePositivos;
	var promedioDeNegativos;
	var cantidadDePares;
	var diferencia;
	// declarar variables
	
	

	contador=0;
	respuesta='si';
	sumaNegativos=0;
	sumaPositivos=0;
	cantidadNegativos=0;
	cantidadPositivos=0;
	cantidadDeCeros=0;
	promedioDePositivos=0;
	promedioDeNegativos=0;
	cantidadDePares=0;
	diferencia=0;
	//numeroMaximo=-999
	//numeroMinimo=9999
	//bandera=0;

	
	while(respuesta!='no')
	{	
		numeroIngresado=prompt("Ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado < 0)
		{
			sumaNegativos=sumaNegativos + numeroIngresado 
			cantidadNegativos++;
			
		}
		if(numeroIngresado > 0)
		{
			sumaPositivos=sumaPositivos + numeroIngresado;
			cantidadPositivos++;
			
		}
		if(numeroIngresado == 0)	
		 {
		 	cantidadDeCeros++;
		 }
		 if(numeroIngresado % 2 == 0 && numeroIngresado !=0)
		 {
		 	cantidadDePares++;
		 }
	
		respuesta=prompt("Ingrese no para salir");
	}
	promedioDeNegativos=sumaNegativos / cantidadNegativos;
	promedioDePositivos=sumaPositivos / cantidadPositivos;
	diferencia=sumaPositivos - sumaNegativos;

	console.log("la suma de los negativos es " + sumaNegativos);
	console.log("la suma de los positivos es " + sumaPositivos);
	console.log("la cantidad de negativos es " + cantidadNegativos);
	console.log("la cantidad de positivos es " + cantidadPositivos)
	console.log("la cantidad de ceros es " + cantidadDeCeros)
	console.log("la cantidad de pares son " + cantidadDePares)
	console.log("el promedio de positivos es " + promedioDePositivos);
	console.log("el promedio de negativos es " + promedioDeNegativos);
	console.log("la diferencia entre los numeros positivos y negativos son " + diferencia)
}//FIN DE LA FUNCIÓN