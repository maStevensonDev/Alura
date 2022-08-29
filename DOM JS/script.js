const btn = document.querySelector('[data-form-btn]');

const createTask = (evento)=> {
  event.preventDefault();
  const input =  document.querySelector('[data-form-input]');
  console.log( input.value ); 
}

console.log( btn ); 

btn.addEventListener('click', createTask );

