import { active, addTask, all, clearTasks, completed } from "./taskManager.js";

let addBtn = document.querySelector("#addBtn");
let activeBtn = document.querySelector("#active");
let completedBtn = document.querySelector("#completed");
let allBtn = document.querySelector("#all");
let txtInput = document.querySelector(".txtInput");
let clearCompleted = document.querySelector("#clearCompleted");
let lightmode = document.querySelector("#lightmode");
let sun = document.querySelector("#sun");

export const viewEvent = () => {
  addBtn.addEventListener("click", () => {
    if (txtInput.value === "") {
      alertify.alert("", "Please Enter Something....");
    } else {
      addTask();
    }
  });
  lightmode.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("light");
    if (sun.className === "fa-solid fa-sun") {
      sun.className = "fa-solid fa-moon";
    } else if (sun.className === "fa-solid fa-moon") {
      sun.className = "fa-solid fa-sun";
    }
  });
};
activeBtn.addEventListener("click", () => {
  active();
  activeBtn.style.color = 'rgb(56, 247, 104, 0.689)';
  allBtn.style.color = 'rgb(156, 155, 155)';
});
completedBtn.addEventListener("click", () => {
  completed();
  activeBtn.style.color = 'rgb(156, 155, 155)';
  completedBtn.style.color = 'rgb(56, 247, 104, 0.689)';
});
allBtn.addEventListener("click", () => {
  all();
  activeBtn.style.color = 'rgb(156, 155, 155)';
  completedBtn.style.color = 'rgb(156, 155, 155)';
  allBtn.style.color = 'rgb(56, 247, 104, 0.689)';
});
clearCompleted.addEventListener("click", () => {
  clearTasks();
});
