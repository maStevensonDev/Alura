// var titulo = document.querySelector(".titulo");
// console.log(titulo);
// console.log(titulo.textContent);

// titulo.textContent = "Buena Vida Nutricion";

// console.log("ESTOY IMPRIMENDO UNA FUENTE EXTERNA QUE");

function calcularIMC( peso,altura ) {
  var imc = peso / ( altura * altura );
  return imc.toFixed(2);

}
// ------------------------------------------------------------------
var pacientes = document.querySelectorAll( ".paciente" );

for (let i = 0; i < pacientes.length; i++) {
  const paciente = pacientes[i];

  var tdPeso = paciente.querySelector( ".info-peso" );
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector( ".info-altura" );
  var altura = tdAltura.textContent;

  var tdIMC = paciente.querySelector( ".info-imc" );

  tdIMC.textContent = calcularIMC( peso, altura );

  pesoEsValido = true;
  altuarEsValida = true;

  if ((peso < 0) || (peso > 1000)) {
    console.log( "Peso Incorrecto" );
    tdPeso.textContent = ( " Peso Incorrecto" );
    tdIMC.textContent = "IMC Incorrecto";
    pesoEsValido = false;
    // paciente.style.color = "red"; // colocar el error en color lightcoral
    // paciente.style.backgroundColor = "lightcoral"
    // paciente.style.backgroundColor = "#b54444";
    // paciente.style.color = "white";
    paciente.classList.add( "paciente__incorrecto" );
  }

  if ((altura < 0) || (altura > 2.50)) {
    console.log( "Altura Incorrecto" );
    tdAltura.textContent = ( "Altura Incorrecta" );
    tdIMC.textContent = "IMC Incorrecto";
    altuarEsValida = false;
    paciente.classList.add( "paciente__incorrecto" ); // paciente__incorrecto esta en el css y se importo al js para mejor mantenimiento
  }

  if ( pesoEsValido && altuarEsValida ) {
    // tdIMC.textContent = Math.round( imc ); 1 opcion
    tdIMC.textContent = calcularIMC( peso,altura ); //cantidad de decimales
  }

}





