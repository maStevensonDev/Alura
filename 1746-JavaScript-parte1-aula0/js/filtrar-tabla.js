var campoFiltro = document.querySelector( "#filtrar-tabla" );

campoFiltro.addEventListener( "input" , function(){
  console.log( this.value );
  var pacientes = document.querySelectorAll( ".paciente" );

  if ( this.value.length > 0 ) {
    for ( let i = 0; i < pacientes.length; i++ ) {
      const paciente = pacientes[i];
      var tdNombre = paciente.querySelector( ".info-nombre" );
      var nombre = tdNombre.textContent;

      //REGEX EXPRESIONES REGULARES

      var expresion = new RegExp( this.value, "i" );
      if ( !expresion.test( nombre ) ) {
        paciente.classList.add( "invisible" );
      }
      else {
        paciente.classList.remove( "invisible" );
      }
    }
  }
  else {
    for ( let i = 0; i < pacientes.length; i++ ) {
      const paciente = pacientes [i];
      paciente.classList.remove( "invisible" );
    }
  }
} );