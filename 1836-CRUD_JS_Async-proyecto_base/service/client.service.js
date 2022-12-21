
//Abrir http (metodo, url)

// CRUD  -  METODOS HTTP

//Create - POST
//Read   - GET meotodo por defecto del fecth
//Update - PUT / PATCH
//Delete - DELETE

// FETCH API

const listaClientes = () => fetch( "http://localhost:3000/perfil" ).then( respuesta => respuesta.json());

const crearCliente = (nombre, email ) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // aquie dentro del body va toda la informacion que queremos
    body: JSON.stringify({nombre, email, id: uuid.v4()})
  })
   
}

export const eliminarCLiente = ( id ) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
}

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`)
  .then((respuesta) => respuesta.json());
}

const actualizarCliente = (nombre, email, id) => {
  return fetch(`hhtp://localhost:3000/perfil/${id}`,{
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre, email})
  })
  .then((respuesta) => respuesta)
  .catch((err) => console.log(err));
}

export const clienServices = {
  listaClientes, 
  crearCliente,
  eliminarCLiente,
  detalleCliente,
  actualizarCliente,
};


  

