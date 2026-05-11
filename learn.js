const form = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const errorText =document.getElementById("errorText");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const taskValue = taskInput.value.trim();
    
    if (taskValue.length < 3) {
        errorText.textContent = "Task must be at least 3 characters"
        return;
    }
    errorText.textContent = "";

    const li = document.createElement("li");
    li.textContent = taskValue;

    const btnContainer = document.createElement("div");

    btnContainer.classList.add("btnContainer");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent ="Delete";
    deleteBtn.classList.add("deleteBtn");

     const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("editBtn");
     
    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);
    li.appendChild(btnContainer);

    taskList.appendChild(li);
    
    taskInput.value = "";

    li.addEventListener("click", (e)=>{
    li.classList.toggle("done");
    li.style.background = "#D4FFD4";
    });

    deleteBtn.addEventListener("click", (e)=>{
        e.stopPropagation();
        taskList.removeChild(li);
    })


    editBtn.addEventListener("click", (e)=>{
        e.stopPropagation();

    const editedTask = prompt("Edit your task:");
      
    if (editedTask === null){
        return;
    }

    if (editedTask.trim().length < 3) {
        alert("Task must be at least 3 characters");
        return;
    }
    li.firstChild.textContent = editedTask;
    });
    
});
