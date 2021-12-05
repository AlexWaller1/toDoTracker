console.log("Hello Oa");

let count = 0;

const toDoForm = document.getElementById("to-do-form");

const toDoButton = document.getElementById("to-do-button");

const toDoList = document.getElementById("to-do-list");

const msg1 = document.getElementById("msg-1");

toDoButton.addEventListener("click", onSubmit);

//................................................................

// let tasksArray = [];
let data1 = localStorage.getItem("task-list");
let data2 = JSON.parse(data1);
let tasksArray = data2;

let retrievedData = [];

function liMaker(text) {
  msg1.innerHTML = "Get To Work!";
  const li = document.createElement("li");
  li.id = "list-item";
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Complete Task";
  deleteButton.id = "delete-button";

  li.appendChild(
    document.createTextNode(`
  ${text}`)
  );
  li.appendChild(deleteButton);
  toDoList.appendChild(li);

  deleteButton.addEventListener("click", function () {
    toDoList.removeChild(li);

    deleteButton = "";

    count++;
  });
}

//................................................................

function onSubmit(e) {
  if (toDoForm.value.trim() === "") {
    msg1.innerHTML = "Form Is Empty!";
  } else {
    e.preventDefault();

    liMaker(toDoForm.value);

    let obj = { name: `${toDoForm.value}`, done: false };
    tasksArray.push(obj);

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
