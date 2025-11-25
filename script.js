const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add task
function addTask() {
    const task = taskInput.value.trim();
    if (task === "") return alert("Please enter a task!");

    const li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleComplete(this)">${task}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
    saveData();
}

// Toggle completed task
function toggleComplete(task) {
    task.classList.toggle("completed");
    saveData();
}

// Delete task
function deleteTask(button) {
    button.parentElement.remove();
    saveData();
}

// Save data to localStorage
function saveData() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

// Load saved tasks when page opens
window.onload = () => {
    taskList.innerHTML = localStorage.getItem("tasks") || "";
};