const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const inWorkContainer = document.querySelector('.inwork ul');
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
        inWorkContainer.appendChild(e.target);
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

inWorkContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        let li = e.target;
        li.classList.add("checked");  
        completeContainer.appendChild(li);
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

completeContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        if (e.target.classList.contains("checked")) {
            e.target.classList.remove("checked");
            inWorkContainer.appendChild(e.target);
        } else {
            e.target.classList.add("checked"); 
        }
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
    localStorage.setItem("inWorkData", inWorkContainer.innerHTML);
    localStorage.setItem("completeData", completeContainer.innerHTML);
}

function showTask() {
    const data = localStorage.getItem("data");
    const inWorkData = localStorage.getItem("inWorkData");
    const completeData = localStorage.getItem("completeData");

    if (data) {
        listContainer.innerHTML = data;
    }
    if (inWorkData) {
        inWorkContainer.innerHTML = inWorkData;
    }
    if (completeData) {
        completeContainer.innerHTML = completeData;
    }
}

showTask();
