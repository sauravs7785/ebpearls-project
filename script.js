document.addEventListener("DOMContentLoaded", function () {
    // Handle login form submission
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const loginMessage = document.getElementById("loginMessage");

            if (email && password) {
                loginMessage.textContent = "Logging in...";
                loginMessage.style.color = "green";
                setTimeout(() => {
                    loginMessage.textContent = "Login successful!";
                }, 1000);
            } else {
                loginMessage.textContent = "Please fill in all fields.";
                loginMessage.style.color = "red";
            }
        });
    }

    // Handle demo request form submission
    const demoForm = document.getElementById("demoForm");
    if (demoForm) {
        demoForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("demoEmail").value;
            const demoMessage = document.getElementById("demoMessage");

            if (name && email) {
                demoMessage.textContent = "Request submitted! We'll contact you soon.";
                demoMessage.style.color = "green";
            } else {
                demoMessage.textContent = "Please fill in all fields.";
                demoMessage.style.color = "red";
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

function loadTasks() {
    fetch("load_tasks.php")
        .then(response => response.json())
        .then(tasks => {
            const taskList = document.getElementById("task-list");
            taskList.innerHTML = "";
            tasks.forEach(task => {
                taskList.innerHTML += `<li>${task.name} 
                    <button class="delete-task" onclick="deleteTask(${task.id})">Delete</button>
                </li>`;
            });
        });
}

function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskName = taskInput.value.trim();

    if (taskName !== "") {
        fetch("add_task.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: taskName })
        })
        .then(response => response.text())
        .then(() => {
            taskInput.value = "";
            loadTasks();
        });
    }
}

function deleteTask(taskId) {
    fetch("delete_task.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: taskId })
    })
    .then(response => response.text())
    .then(() => {
        loadTasks();
    });
}
