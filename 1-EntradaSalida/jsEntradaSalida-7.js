/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	
	numeroUno=document.getElementById("numeroUno").value;
	numeroDos=document.getElementById("numeroDos").value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	suma=numeroUno + numeroDos;

	alert("La suma es " + suma);
}

function restar()
{
	
}

function multiplicar()
{ 
	
}

function dividir()
{
	
}

