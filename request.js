const API_URL="https://my-json-server.typicode.com/Andialecon/appTipoTrello/tasks";

axios
.get(API_URL)
.then((res)=> showAllTasks(res.data))
.catch((err)=>console.log(err));

const showAllTasks=(data)=>{
    data.map((task)=>createATask(task));
};

const createATask=(task)=>{  
    let newTask = document.createElement("article");
    newTask.setAttribute("class","item");
    newTask.innerHTML = `<div role="alert" style="margin: 10px; border-radius: 10px; padding: 5px;box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;">
    <h4 class="">${task.title}</h4>
    <hr>
    <p style="word-wrap: break-word;"></p>
    <hr>
    <p class="mb-0" >${task.responsable}</p>
    </div>`
  
    let tareaPendiente = document.getElementById("tareaPendiente");
    tareaPendiente.appendChild(newTask);
}