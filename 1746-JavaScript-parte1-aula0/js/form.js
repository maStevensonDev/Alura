var botonAgregar = document.querySelector( "#adicionar-paciente" );

botonAgregar.addEventListener( "click", function ( event ) { //funcion anonima que se ejecutara en el momento 
  event.preventDefault(); //PREVENIR EL comportamiento por defecto del boton 

  var form = document.querySelector( "#form-adicionar" );
  var paciente = capturarDatosPaciente(form);
  var tabla = document.querySelector( "#tabla-pacientes" );
  var pacienteTr = construirTr(paciente);

  var errores = validarPaciente( paciente );
  if ( errores.length > 0 ) {
    agregarMensajesErrores( errores );
    return;
  }
  //validar Paciente
  tabla.appendChild(pacienteTr);
  form.reset();

  var mensajesErrores = document.querySelector( "#mensaje__error" );
  mensajesErrores.innerHTML = "";

} );

function capturarDatosPaciente(form) {
  //capturando los datos del formulario
  var paciente = {
     nombre : form.nombre.value,
     peso : form.peso.value,
     altura : form.altura.value,
     gordura : form.gordura.value,
     imc : calcularIMC(form.peso.value, form.altura.value)
  }
  return paciente;
}

function construirTr(paciente) {
  //crear los tds y un tr
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  // var nombreTd = construirTd(paciente.nombre,"info-nombre");
  // var pesoTd = construirTd(paciente.peso,"info-peso");
  // var alturaTd = construirTd(paciente.altura,"info-altura");
  // var gorduraTd = construirTd(paciente.gordura,"info-gordura");
  // var imcTd = construirTd(paciente.imc,"info-imc");

  //Asignacion al tr de los td y a la tabla
  pacienteTr.appendChild(construirTd(paciente.nombre,"info-nombre"));
  pacienteTr.appendChild(construirTd(paciente.peso,"info-peso"));
  pacienteTr.appendChild(construirTd(paciente.altura,"info-altura"));
  pacienteTr.appendChild(construirTd(paciente.gordura,"info-gordura"));
  pacienteTr.appendChild(construirTd(paciente.imc,"info-imc"));

  return pacienteTr;
}

function construirTd( dato, clase ) {
  var td = document.createElement( "td" )
  td.classList.add( clase );
  td.textContent = dato;

  return td;
}

function validarPaciente( paciente ) { 
  var errores = [] ;

   if ( paciente.nombre.length == 0 ) {
    errores.push( "EL CAMPO NOMBRE ESTA VACIO" );
  }
  if ( paciente.peso.length == 0 ) {
    errores.push( "EL CAMPO PESO ESTA VACIO" );
  }
  if ( paciente.altura.length == 0 ) {
    errores.push( "EL CAMPO ALTURA ESTA VACIO" );
  }
  if ( paciente.gordura.length == 0 ) {
    errores.push( "EL CAMPO GORDURA ESTA VACIO" );
  }

  if ( !validarPeso( paciente.peso ) ) {
    errores.push( "EL PESO ES INCORRECTO" );
  }
  if ( !validarAltura( paciente.altura ) ) {
    errores.push( "LA ALTURA ES INCORRECTA" );
  }
  return errores;
}

function agregarMensajesErrores( errores ) {
  var ul = document.querySelector( "#mensaje__error" );
  ul.innerHTML = "";
  errores.forEach(function( error ){
    var li = document.createElement( "li" );
    li.textContent = error;
    ul.appendChild( li );
  });

}