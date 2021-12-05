console.log("Hello Oa");

let count = 0;

const toDoForm = document.getElementById("to-do-form");

const toDoButton = document.getElementById("to-do-button");

let toDoList = document.getElementById("to-do-list");

const msg1 = document.getElementById("msg-1");

toDoButton.addEventListener("click", onSubmit);

//................................................................

let tasksArray = "";
let data1 = localStorage.getItem("task-list");
let data2 = JSON.parse(data1);

if (data2 == null) {
  tasksArray = [];
} else {
  tasksArray = data2;
}

let retrievedData = [];
retrievedData = localStorage.getItem("task-list");

function displayTasks() {
  for (let i = 0; i < tasksArray.length; i++) {
    const li = document.createElement("li");
    li.id = "list-item";
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Complete Task";
    deleteButton.id = "delete-button";

    li.appendChild(
      document.createTextNode(`
  ${tasksArray[i].name}`)
    );
    li.appendChild(deleteButton);
    toDoList.appendChild(li);

    deleteButton.addEventListener("click", function () {
      toDoList.removeChild(li);

      deleteButton = "";
    });
  }
}

displayTasks();

//................................................................

function onSubmit(e) {
  if (toDoForm.value.trim() === "") {
    msg1.innerHTML = "Form Is Empty!";
  } else {
    e.preventDefault();

    toDoList.innerHTML = "";
    toDoList = document.getElementById("to-do-list");
    // liMaker(toDoForm.value);
    msg1.innerHTML = "Get To Work!";

    let obj = { name: `${toDoForm.value}`, done: false };
    tasksArray.push(obj);

    displayTasks();
    // console.log(tasksArray);
    let parseTask = JSON.stringify(tasksArray);
    localStorage.setItem("task-list", parseTask);

    retrievedData = localStorage.getItem("task-list");
    console.log(retrievedData);
    console.log(tasksArray);
    console.log(tasksArray[0].done);

    toDoForm.value = "";
  }
}
