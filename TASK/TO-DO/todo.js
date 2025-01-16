const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completeContainer = document.querySelector('.complete ul');

// Add new task
function addTask() {
    if (inputBox.value === '') {
        alert("You Must Write Something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // Delete icon
        li.appendChild(span);

        // Add new task to the To-Do list
        listContainer.appendChild(li);

        // Clear input field after adding task
        inputBox.value = '';
    }
    saveData();
}

// Listen for click events on both lists
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

        // If marked as complete, move to complete container
        if (e.target.classList.contains("checked")) {
            completeContainer.appendChild(e.target);  // Move task to completed section
        } else {
            listContainer.appendChild(e.target);  // Move back to To-Do section if unchecked
        }
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();  // Remove the task when delete icon is clicked
        saveData();
    }
}, false);

// Listen for click events on the completed tasks container
completeContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

        // If unchecked, move the task back to the To-Do list
        if (!e.target.classList.contains("checked")) {
            listContainer.appendChild(e.target);  // Move task back to active list
        }
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();  // Remove the task when delete icon is clicked
        saveData();
    }
}, false);

// Save the task data to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);  // Save active tasks
    localStorage.setItem("completeData", completeContainer.innerHTML);  // Save completed tasks
}

// Show the saved tasks when the page loads
function showTask() {
    const data = localStorage.getItem("data");
    const completeData = localStorage.getItem("completeData");

    if (data) {
        listContainer.innerHTML = data;
    }
    if (completeData) {
        completeContainer.innerHTML = completeData;
    }
}

showTask();
