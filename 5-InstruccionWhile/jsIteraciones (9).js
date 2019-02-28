function mostrar()
{

	var contador;
	var respuesta;
	var numeroMaximo;
	var numeroMinimo;
	var numeroIngresado;
	var bandera;
	// declarar variables
	
	

	contador=0;
	respuesta='si';
	//numeroMaximo=-999
	//numeroMinimo=9999
	//bandera=0;

	
	while(respuesta!='no')
	{	
		numeroIngresado=prompt("Ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(contador==0)
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			
		}else
		{	
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
			if(numeroIngresado < numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}

		 }
		 contador++;	
		respuesta=prompt("Ingrese no para salir");
	}

	console.log("el numero maximo es " + numeroMaximo);
	console.log("el numero maximo es " + numeroMinimo);    


}//FIN DE LA FUNCIÓN