
let btnCrearTask = document.getElementById("btnCrearTask");
btnCrearTask.addEventListener("click", createTask);

function createTask() {
    let titulo = document.getElementById("titulo").value;
    let descripcion = document.getElementById("descripcion").value;
    let responsable = document.getElementById("responsable").value;
    let fechaEntrega = document.getElementById("fechaEntrega").value;

    let newTask = document.createElement("article");
    newTask.setAttribute("class","item");
    newTask.innerHTML = `<div role="alert" style="margin: 10px; border-radius: 10px; padding: 5px;box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;">
    <h4 class="">${titulo}</h4>
    <hr>
    <p style="word-wrap: break-word;">${descripcion}</p>
    <hr>
    <p class="mb-0" >${responsable}</p>
  </div>`

    renderizarTarea(newTask);
}

function renderizarTarea(newTask) {
    let tareaPendiente = document.getElementById("tareaPendiente");
    tareaPendiente.appendChild(newTask);
}

const container = document.querySelectorAll("container");

// const droppable = new Droppable.default(container, {
//     draggable: "article",
//     dropzone: '.body-task'
// })

// funciona
// const droppable = new Droppable.default(document.querySelectorAll('.container'), {
//     draggable: '.item',
//     dropzone: '.body-task'
// });
// droppable.on('droppable:dropped', () => console.log('droppable:dropped'));
// droppable.on('droppable:returned', () => console.log('droppable:returned'));



const sor = new Sortable.default(
  document.querySelectorAll('.body-task'),
  {draggable:'article'}
);


// const sortable = new Draggable.Sortable(document.querySelectorAll(container), {
//     draggable: 'article'
// });