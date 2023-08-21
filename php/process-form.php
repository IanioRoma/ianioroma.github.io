<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $email = $_POST["email"];
    $social = $_POST["social"];
    $message = $_POST["message"];
    $service = $_POST["paymentMethod"];

    // Validate and sanitize the data as needed

    // Send email
    $to = "ianiogloroma@gmail.com";
    $subject = "New Contact Form Submission";
    $messageBody = "Name: $firstName $lastName\nEmail: $email\nSocial Media: $social\nMessage: $message\nService: $service";
    $headers = "From: $email";

    $success = mail($to, $subject, $messageBody, $headers);

    if ($success) {
        echo json_encode(["message" => "Email sent successfully"]);
    } else {
        echo json_encode(["error" => "Email could not be sent"]);
    }
}
?>
