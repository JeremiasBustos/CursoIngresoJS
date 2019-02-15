/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperaturaCelsius;
    var temperaturaFahrenheit;

    temperaturaFahrenheit=document.getElementById("Temperatura").value;

    temperaturaFahrenheit=parseInt(temperaturaFahrenheit);

    temperaturaCelsius=(temperaturaFahrenheit - 32) * 5/9;

    alert(temperaturaFahrenheit + " Fahrenheit son " + temperaturaCelsius +  " grados Celsius");
 

}

function CentigradosFahrenheit () 
{
    var temperaturaFahrenheit;
    var temperaturaCelsius;

    temperaturaCelsius=document.getElementById("Temperatura").value;

    temperaturaCelsius=parseInt(temperaturaCelsius);

    temperaturaFahrenheit=(9/5 * temperaturaCelsius) + 32;

    alert(temperaturaCelsius + " Celsius son  " + temperaturaFahrenheit  + " temperatura Fahrenheit");

}
