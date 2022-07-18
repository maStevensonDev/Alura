var botonAgregar = document.querySelector( "#adicionar-paciente" );

botonAgregar.addEventListener( "click",function(event){ //funcion anonima que se ejecutara en el momento 
  event.preventDefault(); //PREVENIR EL comportamiento por defecto del boton 

  var form = document.querySelector("#form-adicionar");

  var nombre = form.nombre.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

 var tabla = document.querySelector("#tabla-pacientes");

  pacienteTr = document.createElement("tr");

  nombreTd = document.createElement("td");
  pesoTd = document.createElement("td");
  alturaTd = document.createElement("td");
  gorduraTd = document.createElement("td");
  imcTd = document.createElement("td");

  //crear etiquetas tr y 5 etiquetas td
  nombreTd.textContent = nombre;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
  imcTd.textContent = calcularIMC(peso,altura);

  pacienteTr.appendChild(nombreTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  tabla.appendChild(pacienteTr);

  console.log(pacienteTr);

  

});
