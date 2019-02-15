function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var número;
	numero=Math.floor((Math.random() * 10) + 1);

	if(numero == 9 && numero == 10)
	{
		alert("Excelente");
	}	


	if(numero >= 4 && numero < 9)
	{
		alert("Aprobo");

	}

	else
	{
		alert("Vamos, para la proxima de puede");
	}	
}//FIN DE LA FUNCIÓN