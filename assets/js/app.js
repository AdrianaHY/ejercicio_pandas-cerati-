var botonUno = document.getElementById("boton1");
var parrafoUno = document.getElementById("parrafo1");
var imagen= document.getElementsByClassName("imagen")[0];
var span = [];

for (var i = 0; i < 9; i++){
  span[i]=document.getElementsByClassName("close")[0];
  span[i].addEventListener("click",cerrar);
}

function cerrar() {
  imagen.style.display = "none";
}

function ocultarParrafo() {
  parrafoUno.style.visibility = "hidden";
}

function mostrarParrafo(){
  parrafoUno.style.visibility = "visible";
}
