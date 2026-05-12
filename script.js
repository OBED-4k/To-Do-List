const form = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const errorText = document.getElementById("errorText");

// FORM SUBMIT
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const taskValue = taskInput.value.trim();

    //VALIDATION
    if(taskValue.length <= 3){
        errorText.textContent = "Task must be at least 3 characters";
        return;
    }

    // CLEAR ERROR
    errorText.textContent ="";

    // LI
    const li = document.createElement("li");
    li.textContent = taskValue;

    //BUTTON CONTAINER
    const btnContainer = document.createElement("div");

    btnContainer.classList.add("btnContainer");
    
    // DELETE BUTTON
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent ="Delete";
    deleteBtn.classList.add("deleteBtn");

    // EDIT BUTTON
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("editBtn");


    // APPEND BUTTONS
    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);
    li.appendChild(btnContainer);


    // APPEND LI TO UL
    taskList.appendChild(li);


    // CLEAR INPUT
    taskInput.value = "";


    // TOGGLE DONE CLASS
    li.addEventListener("click", ()=>{
        li.classList.toggle("done");
        li.style.background = "3D4FFD4";
    });


    //DELETE TASK
    deleteBtn.addEventListener("click", (e)=>{
        e.stopPropagation();
        taskList.removeChild(li);
    });


    // EDIT TASK
    editBtn.addEventListener("click", (e)=>{
        e.stopPropagation();

        const editedTask = prompt("Edit your task:", li.firstChild.textContent);

        //if clicked cancel
        if (editedTask === null) {
            return;
        }

        //validation
        if (editedTask.trim().length <= 3){
            alert("Task ,ust be at least 3 characters");
            return;
        }

        li.firstChild.textContent = editedTask;  
    });

    });

    //     const newLi = document.createElement("li");
    //     newLi.textContent = "Edited: " + taskValue;

    //     //replacedChild(newElement, oldElement)
    //     taskList.replaceChild(newLi, li);
    
  