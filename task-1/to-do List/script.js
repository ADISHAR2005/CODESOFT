let entryTask = document.getElementById("input-box");
let list_container = document.getElementById("listcontainer");

function addTask() {
    if (entryTask.value === '') {
        alert("Enter ur task");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = entryTask.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
    }
    entryTask.value = "";
    saveData();

}

list_container.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)
function saveData() {
    localStorage.setItem("data", list_container.innerHTML)
}
function showTask() {
    list_container.innerHTML = localStorage.getItem("data")
}
showTask();
