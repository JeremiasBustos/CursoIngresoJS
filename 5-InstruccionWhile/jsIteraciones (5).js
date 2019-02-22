function mostrar()
{

var sexo; 
 sexo= prompt("ingrese f ó m .");

 while(sexo != "f" && sexo != "m")
 {
 	sexo=prompt("Dato invalido, ingrese el sexo otra vez")
 }	

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN