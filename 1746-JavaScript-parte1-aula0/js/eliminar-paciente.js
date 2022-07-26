//capturo toda la section donde estan los datos del paciente
var pacientes = document.querySelectorAll( ".paciente" );
//tabla de pacientes
var tabla = document.querySelector( "#tabla-pacientes" );
//evento para eliminar cualquier paciente que estan en la tabla con doble click
tabla.addEventListener( "dblclick" , function(){
  event.target.parentNode.classList.add("fadeOut");
  // event.target.parentNode.remove();
  setTimeout(function() {
    event.target.parentNode.remove();
  },500);
});

