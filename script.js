let tasksElem = document.querySelector("#tasks");
let taskInput = document.querySelector("#input");
let addTaskBtn = document.querySelector("#addTaskBtn");

addTaskBtn.onclick = () => {
  let task = taskInput.value;

  if (task.length > 0) {
    let taskElem = document.createElement("div");
    taskElem.textContent = task;
    tasksElem.appendChild(taskElem);
    taskInput.value = "";
  }
};
