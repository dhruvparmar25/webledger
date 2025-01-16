const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completeContainer = document.querySelector('.complete ul');

function addTask() {
    if (inputBox.value === '') {
        alert("You Must Write Something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        listContainer.appendChild(li);

        inputBox.value = '';
    }
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

        if (e.target.classList.contains("checked")) {
            completeContainer.appendChild(e.target);
        } else {
            listContainer.appendChild(e.target);
        }
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

completeContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

        if (!e.target.classList.contains("checked")) {
            listContainer.appendChild(e.target);
        }
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
    localStorage.setItem("completeData", completeContainer.innerHTML);
}


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
