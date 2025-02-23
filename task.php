<?php
$servername = "localhost";
$username = "root"; // Change as per your DB
$password = ""; // Change as per your DB
$dbname = "task_manager";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Add task
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['task'])) {
    $task = htmlspecialchars($_POST['task']);
    $sql = "INSERT INTO tasks (task, completed) VALUES ('$task', 0)";
    $conn->query($sql);
}

// Mark task as completed
if (isset($_GET['complete'])) {
    $id = $_GET['complete'];
    $conn->query("UPDATE tasks SET completed = 1 WHERE id = $id");
}

// Delete task
if (isset($_GET['delete'])) {
    $id = $_GET['delete'];
    $conn->query("DELETE FROM tasks WHERE id = $id");
}

// Fetch tasks
$result = $conn->query("SELECT * FROM tasks ORDER BY id DESC");
?>