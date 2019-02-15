
function mostrar()
{
	var mascotaUno;
	var mascotaDos;
	var pesoMascotaUno;
	var pesoMascotaDos
	var suma;
    

    mascotaUno=prompt("Ingrese mascota")
    mascotaDos=prompt("Ingrese mascota")
	pesoMascotaUno=prompt("Ingrese peso de mascota");
	pesoMascotaDos=prompt("Ingrese peso de mascota");

	pesoMascotaUno=parseInt(pesoMascotaUno);
	pesoMascotaDos=parseInt(pesoMascotaDos)

	suma=pesoMascotaUno + pesoMascotaDos

	alert("Tenes dos mascotas " + mascotaUno  +" y " + mascotaDos  + " que pesan " + pesoMascotaUno + " y " + pesoMascotaDos  + " y la suma de sus kilos es " + suma)

}
