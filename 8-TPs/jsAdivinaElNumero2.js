/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
	numeroSecreto=Math.floor(Math.random() * 101);
	console.log("El numero es " + numeroSecreto);
	contadorIntentos=0

}

function verificar()
{
	var numeroIngresado;
	var mensaje;
	contadorIntentos=contadorIntentos + 1;
	numeroIngresado=numero.value;
	numeroIngresado=parseInt(numeroIngresado);
	console.log(numeroIngresado);
	if(numeroIngresado==numeroSecreto)
	{switch(contadorIntentos)
		{
			case 1:
			alert("Usted es un Psíquico")
			break
			case 2:
			alert("excelente percepción")
			break
			case 3:
			alert("Eso es suerte")
			break
			case 4:
			alert("Excelente tecnica")
			break
			case 5:
			alert("Usted esta en la media")
			break
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			alert("falta tecnica")
			break
			default:
			alert("afortunado en el amor!!");
			break
		}
		intentos.value=contadorIntentos;
	}


}