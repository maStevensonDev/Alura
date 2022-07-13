// var titulo = document.querySelector(".titulo");
// console.log(titulo);
// console.log(titulo.textContent);

// titulo.textContent = "Buena Vida Nutricion";

// console.log("ESTOY IMPRIMENDO UNA FUENTE EXTERNA QUE");

// ---------------------------------------------------------------------

// var info = document.querySelector(".info");

var paciente = document.querySelector("#primer__paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdIMC = paciente.querySelector(".info-imc");



tdIMC.textContent = imc;

pesoEsValido = true;

altuarEsValida = true;



if ( ( peso < 0 ) || ( peso > 1000 ) ) {
  console.log( "Peso Incorrecto" );
  tdPeso.textContent = ( peso + " Peso Incorrecto" );
  tdIMC.textContent = "IMC Incorrecto";
  pesoEsValido = false;
}

if ( ( altura < 0 ) || ( altura > 2.50 ) ) {
  console.log( "Altura Incorrecto" );
  tdAltura.textContent = ( altura + " Altura Incorrecta" );
  tdIMC.textContent = "IMC Incorrecto";
  altuarEsValida = false;
}

if ( pesoEsValido && altuarEsValida ) {
  var imc = peso / (altura * altura);
  tdIMC.textContent = imc;
}






