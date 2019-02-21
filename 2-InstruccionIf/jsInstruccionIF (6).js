function mostrar()
{
//tomo la edad  

var edad;
var mensaje;

edad=document.getElementById("edad").value;

if(edad >= 18)

{
	mensaje="Es adulto";
}
	
	
	


else if(edad >= 13  && edad <= 17)
	
{
	mensaje="Es adolescente"
}


else
{


	mensaje="Es niño";
}
alert(mensaje);
}//FIN DE LA FUNCIÓN