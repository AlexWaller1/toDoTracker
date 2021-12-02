console.log("Hello Oa");

const toDoForm = document.getElementById("to-do-form");

const toDoButton = document.getElementById("to-do-button");

const toDoList = document.getElementById("to-do-list");

const msg1 = document.getElementById("msg-1");

toDoButton.addEventListener("click", onSubmit);

function onSubmit(e) {
  if (toDoForm.value.trim() === "") {
    msg1.innerHTML = "Form Is Empty!";
  } else {
    msg1.innerHTML = "Get To Work!";
    const li = document.createElement("li");
    li.id = "list-item";
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Complete Task";
    deleteButton.id = "delete-button";
    deleteButton.classList.add("btnbtn-light");
    li.appendChild(
      document.createTextNode(`
      ${toDoForm.value}`)
    );
    li.appendChild(deleteButton);
    toDoList.appendChild(li);
    // toDoList.appendChild(deleteButton);

    // clear fields
    toDoForm.value = "";

    deleteButton.addEventListener("click", function () {
      toDoList.removeChild(li);
      // toDoList.removeChild(deleteButton);
      deleteButton = "";
    });
  }
}
