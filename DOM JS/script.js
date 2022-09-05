import checkComplete from "./componentes/checkComplete.js";
import deleteIcon from "./componentes/deleteIcon.js";

(() => {
  const btn = document.querySelector('[data-form-btn]');

  const createTask = (evento) => {
    event.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = "";

    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());

    const tittleTask = document.createElement("span");
    tittleTask.classList.add("task");
    tittleTask.innerText = value;
    taskContent.appendChild(tittleTask);

    // task.innerHTML = content;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
  }

  btn.addEventListener('click', createTask);

})()



