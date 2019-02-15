/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

var largo;
var ancho;
var perimetro;
var alambre;

largo=document.getElementById("Largo").value;
ancho=document.getElementById("Ancho").value;

perimetro=largo * 2 + ancho * 2;

alambre=perimetro * 3;

alert("Es " + alambre);
}
function Circulo () 
{
	var radio;
	var diametro;
	var perimetro;
	var pi=3.14
	var alambre;

	radio=document.getElementById("Radio").value;

	diametro=radio * 2;

	perimetro=diametro * pi;

	alambre=perimetro * 3;

	alert("La cantidad de alambre necesria es " + alambre);

	
}
function Materiales () 
{
	var base;
	var altura;
	var cemento;
	var cal;
	

	base=document.getElementById("Largo").value;
	altura=document.getElementById("Ancho").value;

	cemento=(base *  altura) * 2;
	cal=(base * altura) * 3;

	alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");

}