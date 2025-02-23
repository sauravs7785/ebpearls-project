<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $action = $_POST["action"];

    switch ($action) {
        case "get_started":
            echo "Redirecting to Get Started page...";
            break;
        case "learn_more":
            echo "Redirecting to Learn More page...";
            break;
        case "get_started_now":
            echo "Redirecting to Get Started Now page...";
            break;
        default:
            echo "Invalid action.";
    }
}
?>
