const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completeContainer = document.querySelector('.complete ul');
const todoList = document.getElementById('todo-list');
const completedTasks = document.getElementById('completed-tasks');

// Function to add a new task
function addTask() {
    if (inputBox.value === '') {
        alert("You Must Write Something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // '×' symbol for delete button
        li.appendChild(span);

        li.addEventListener("click", function() {
            li.classList.toggle("checked");

            if (li.classList.contains("checked")) {
                completeContainer.appendChild(li);
            } else {
                listContainer.appendChild(li);
            }
            saveData();
        });

        span.addEventListener("click", function(event) {
            event.stopPropagation();
            li.remove();
            saveData();
        });



        listContainer.appendChild(li);
        inputBox.value = ''; // Clear input field after adding task
    }
    saveData();
}

// Save tasks data to localStorage
function saveData() {
    const tasks = [];
    const completedTasksArr = [];

    listContainer.querySelectorAll("li").forEach(task => {
        tasks.push(task.innerHTML);
    });

    completeContainer.querySelectorAll("li").forEach(task => {
        completedTasksArr.push(task.innerHTML);
    });

    localStorage.setItem("data", JSON.stringify(tasks));
    localStorage.setItem("completeData", JSON.stringify(completedTasksArr));
}

// Show to-do tasks
function showTodo() {
    todoList.style.display = "block";
    completedTasks.style.display = "none";
}

// Show completed tasks
function showCompleted() {
    todoList.style.display = "none";
    completedTasks.style.display = "block";
}

// Show tasks from localStorage
function showTask() {
    const tasks = JSON.parse(localStorage.getItem("data"));
    const completedTasksArr = JSON.parse(localStorage.getItem("completeData"));

    if (tasks) {
        tasks.forEach(task => {
            let li = document.createElement("li");
            li.innerHTML = task;

            let span = document.createElement("span");
            span.innerHTML = "\u00d7"; // '×' symbol for delete button
            li.appendChild(span);

            li.addEventListener("click", function() {
                li.classList.toggle("checked");
                if (li.classList.contains("checked")) {
                    completeContainer.appendChild(li);
                } else {
                    listContainer.appendChild(li);
                }
                saveData();
            });

            span.addEventListener("click", function(event) {
                event.stopPropagation();
                li.remove();
                saveData();
            });

            listContainer.appendChild(li);
        });
    }

    if (completedTasksArr) {
        completedTasksArr.forEach(task => {
            let li = document.createElement("li");
            li.innerHTML = task;
            li.classList.add("checked");

            let span = document.createElement("span");
            span.innerHTML = "\u00d7"; // '×' symbol for delete button
            li.appendChild(span);

            span.addEventListener("click", function(event) {
                event.stopPropagation();
                li.remove();
                saveData();
            });

            completeContainer.appendChild(li);
        });
    }
}

// Call showTask on page load
showTask();

function clearAllTasks(type) {
    if (type === 'todo') {
        // Clear To-Do List
        listContainer.innerHTML = '';
        localStorage.removeItem('data');
        alert('All tasks in the To-Do List have been cleared!');
    } else if (type === 'completed') {
        // Clear Completed Tasks
        completeContainer.innerHTML = '';
        localStorage.removeItem('completeData');
        alert('All tasks in Completed Tasks have been cleared!');
    }
}
