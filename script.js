const inputBox = document.getElementById('inputBox');
const listContainer = document.querySelector('.list-container');

function addtask() {
    if (inputBox.value === '') {
        alert("Please input a note!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span")
        span.innerHTML= "\u00d7";
        li.appendChild(span)

       inputBox.value = "";

       listContainer.addEventListener("click", (e) => {
    const target = e.target;

    if (target.tagName === "LI") {
        target.classList.toggle("checked");
    } else if (target.tagName === "SPAN") {
        target.parentElement.remove();
    }
}, false);

    }
}

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
};

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data") || "";
};

showTask();
