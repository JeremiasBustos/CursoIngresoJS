function mostrar()
{
//tomo la edad  
var mesDelAño;
var mensaje;
mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Febrero":
	mensaje="tiene 28 días"
	break

	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
	mensaje=" tiene 30 días."
	break

	default:
	mensaje=" tiene 31 días."
	break

}


alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN