import { deleteTask, save } from "./taskManager.js";
let tasksDiv = document.querySelector("#tasks");

class TaskClass {
  constructor(_name, _id, _isCompleted) {
    this.name = _name;
    this.id = _id;
    this.isCompleted = _isCompleted;
  }
  render() {
    let newLi = document.createElement("li");
    let deleteItem = document.createElement("button");
    newLi.className = "taskCard draggable";
    newLi.draggable = "true";
    deleteItem.className = "deleteItem";
    deleteItem.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    newLi.innerHTML = `
        <div class="taskItem checkBoxS">
          <input type="checkbox" class="checkInput" id=${this.id}/>
          <span class="check"></span>
          </div>
          <p class="item" id=${this.id}>${this.name}</p>
    `;
    tasksDiv.append(newLi);
    newLi.append(deleteItem);
    deleteItem.addEventListener("click", () => {
      deleteTask(this.id);
    });
    if (this.isCompleted) {
      document.getElementById(`${this.id}/`).checked = true;
      let array = document.getElementsByClassName("item");
      for (let p of array) {
        if (p.id == this.id) p.style.textDecoration = "line-through";
      }
    }
    newLi.addEventListener(
      "click",
      (event) => {
        if (event.target.tagName === "INPUT") {
          if (this.isCompleted) {
            event.target.className === "checkInput";
            this.isCompleted = false;
            let item = document.getElementsByClassName("item");
            for (let p of item) {
              if (p.id == this.id) p.style.textDecoration = "";
            }
            save();
          } else if (!this.isCompleted) {
            event.target.className === "checkInput checked";
            this.isCompleted = true;
            let item = document.getElementsByClassName("item");
            for (let p of item) {
              if (p.id == this.id) p.style.textDecoration = "line-through";
            }
            save();
          }
        }
      },
      false
    );
  }
}
export default TaskClass;
