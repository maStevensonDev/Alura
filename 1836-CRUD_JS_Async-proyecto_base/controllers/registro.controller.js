import { clienServices } from "../service/client.service.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;

  clienServices
  .crearCliente(nombre, email)
  .then(()  =>{
    window.location.href = "/screens/registro_completado.html";
  }).catch((err => console.log(err)))
})

