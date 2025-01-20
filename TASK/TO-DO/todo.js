const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const inWorkContainer = document.querySelector('.inwork ul');
const completeContainer = document.querySelector('.complete ul');

// Create an object to hold task data
let taskData = {
    todo: [],
    inProgress: [],
    completed: []
};

function addTask() {
    if (inputBox.value === '') {
        alert("You Must Write Something");
    } else {
        // Create a new task object
        let newTask = {
            text: inputBox.value,
            id: Date.now() // Unique identifier based on the current timestamp
        };

        // Add the task to the "todo" list
        taskData.todo.push(newTask);

        // Update the UI
        renderLists();

        // Clear input box
        inputBox.value = '';

        saveData();
    }
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        // Move task to "inProgress" list
        let taskId = e.target.dataset.id;
        let task = taskData.todo.find(task => task.id == taskId);
        taskData.todo = taskData.todo.filter(task => task.id != taskId);
        taskData.inProgress.push(task);

        renderLists();
        saveData();
    } else if (e.target.tagName === "SPAN") {
        // Remove task from "todo" list
        let taskId = e.target.parentElement.dataset.id;
        taskData.todo = taskData.todo.filter(task => task.id != taskId);

        renderLists();
        saveData();
    }
}, false);

inWorkContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        let taskId = e.target.dataset.id;
        let task = taskData.inProgress.find(task => task.id == taskId);
        taskData.inProgress = taskData.inProgress.filter(task => task.id != taskId);
        taskData.completed.push(task);

        renderLists();
        saveData();
    } else if (e.target.tagName === "SPAN") {
        let taskId = e.target.parentElement.dataset.id;
        taskData.inProgress = taskData.inProgress.filter(task => task.id != taskId);

        renderLists();
        saveData();
    }
}, false);

completeContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        let taskId = e.target.dataset.id;
        let task = taskData.completed.find(task => task.id == taskId);

        if (e.target.classList.contains("checked")) {
            taskData.completed = taskData.completed.filter(task => task.id != taskId);
            taskData.inProgress.push(task);
        } else {
            taskData.completed = taskData.completed.filter(task => task.id != taskId);
            taskData.todo.push(task);
        }

        renderLists();
        saveData();
    } else if (e.target.tagName === "SPAN") {
        let taskId = e.target.parentElement.dataset.id;
        taskData.completed = taskData.completed.filter(task => task.id != taskId);

        renderLists();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("taskData", JSON.stringify(taskData));
}

function showTask() {
    const savedData = localStorage.getItem("taskData");
    if (savedData) {
        taskData = JSON.parse(savedData);
        renderLists();
    }
}

function renderLists() {
    // Clear existing list contents
    listContainer.innerHTML = '';
    inWorkContainer.innerHTML = '';
    completeContainer.innerHTML = '';

    // Render each list based on the taskData object
    taskData.todo.forEach(task => {
        let li = document.createElement("li");
        li.dataset.id = task.id;
        li.innerHTML = task.text + ' <span>\u00d7</span>';
        listContainer.appendChild(li);
    });

    taskData.inProgress.forEach(task => {
        let li = document.createElement("li");
        li.dataset.id = task.id;
        li.innerHTML = task.text + ' <span>\u00d7</span>';
        inWorkContainer.appendChild(li);
    });

    taskData.completed.forEach(task => {
        let li = document.createElement("li");
        li.dataset.id = task.id;
        li.innerHTML = task.text + ' <span>\u00d7</span>';
        li.classList.add("checked");
        completeContainer.appendChild(li);
    });
}

showTask();
