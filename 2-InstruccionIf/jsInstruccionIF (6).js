function mostrar()
{
//tomo la edad  

var edad;

edad=document.getElementById("edad").value;

if(edad >= 18)

{
	alert("Es adulto");
}
	
	
	


else if(edad >= 13  && edad <= 17)
	
{
	alert("Es adolescente")
}


else
{


	alert("Es niño");
}
}//FIN DE LA FUNCIÓN