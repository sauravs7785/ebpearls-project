<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];

    // Simulating request processing (Replace with actual logic)
    echo "Thank you, $name! We will contact you at $email for the demo.";
}
?>
