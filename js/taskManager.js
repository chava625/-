import TaskClass from "./taskClass.js";

let tasks = load();
renderTasks(tasks);

export const addTask = () => {
  let txtInput = document.querySelector('.txtInput').value;
  let id = Date.now();
  let task = new TaskClass(txtInput, id, false);
  tasks.push(task);
  renderTasks(tasks);
  save();
  document.querySelector('.txtInput').value = '';
  window.location.reload();
};
export const save = () =>{
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function load() {
  let localTasks = localStorage.getItem("tasks");
  if (!localTasks) {
    return [];
  }
  localTasks = JSON.parse(localTasks);
  return localTasks.map((task) => new TaskClass(task.name, task.id , task.isCompleted));
};
function renderTasks(tasks){
  document.querySelector("#tasks").innerHTML = "";
  tasks.forEach((task) => {
    task.render();
  });
};
export const deleteTask = (id) => {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks(tasks);
  save();
  window.location.reload();
};
export const active = ()=>{
  let activeTasks = tasks.filter((task)=> task.isCompleted == false);
  renderTasks(activeTasks);
}
export const all = ()=>{
  renderTasks(tasks);
  window.location.reload();
}
export const completed = ()=>{
  let completedTasks = tasks.filter((task)=> task.isCompleted == true);
  renderTasks(completedTasks);
}
export const clearTasks = ()=>{
  tasks = tasks.filter((task)=> task.isCompleted == false);
  renderTasks(tasks)
  save();
  window.location.reload();
};

