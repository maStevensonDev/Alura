import { clienServices } from "../service/client.service.js";

const formulario = document.querySelector("[data-form]")

//obtener la url actual en la que esta la pagina
//luego obtenemos el id dentro de la pagina que tienen los clientes
//sacamos la id con searchparams que esta dentro de window.location
//en este caso estamos buscando el params id 


const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id == null) {
    window.location.href = "../screens/error.html"
  }
  

  //aqui sacamos el nombre anteriror antes de poder editar que se muestra en el live server
  //luego solamente se modifica el cliente y el correo
  // y se actualiza en el localbhost de json

  const nombre = document.querySelector("[data-nombre]");
  const email = document.querySelector("[data-email]");


  try {
    const perfil = await clienServices.detalleCliente(id)
    if ( perfil.nombre && perfil.email ) {
      nombre.value = perfil.nombre;
      email.value = perfil.email;
    }else {
      throw new Error();
    }
  }
  catch(error) {
    console.log("Catch Error -", error);
    window.location.href = "/screens/error.html";
  }

  

};

obtenerInformacion();

formulario.addEventListener("submit", (event) => {
  event.preventDefault()
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  const nombre = document.querySelector("{data-nombre]").value;
  const email = document.querySelector("{data-email]").value;

  clienServices.actualizarCliente(nombre, email, id).then(() => {
    window.location.href = "../screens/edicion_concluida.html";

  })
}); 