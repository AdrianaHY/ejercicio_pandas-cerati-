var parrafos = document.getElementsByClassName("parrafo")[0];
var botones= document.getElementsByClassName("boton")[0]
var arregloBotones=[];
var arregloParrafos=[];
var imagen= document.getElementsByClassName("imagen")[0];
var span = [];

// botonUno.addEventListener("click", mostrarParrafoUno);
// botonUno.addEventListener("dblclick", ocultarParrafoUno);

for (var i = 0; i < 9; i++){
  span[i]=document.getElementsByClassName("close")[0];
  span[i].addEventListener("click",cerrar);
}

for (var i = 0; i<2; i++){
  arregloBotones[i]=document.getElementsByClassName("boton")[0];
  arregloBotones[i].addEventListener("click",mostrarParrafo);
}

for (var i = 0; i<2; i++){
  arregloParrafos[i]=document.getElementsByClassName("parrafo")[0];
  arregloParrafos[i].addEventListener("dblclick",ocultarParrafo);
}

function cerrar() {
  imagen.style.display = "none";
}

function ocultarParrafo() {
  parrafos.style.visibility = "hidden";
}

function mostrarParrafo(){
  parrafos.style.visibility = "visible";

}
