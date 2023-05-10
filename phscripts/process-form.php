<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = trim($_POST["name"]);
  $email = trim($_POST["email"]);
  $message = trim($_POST["message"]);

  // Validate input
  if (empty($name) || empty($email) || empty($message)) {
    echo '<div class="alert alert-danger" role="alert">Please fill out all fields.</div>';
    exit;
  }
  
  // Validate email
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo '<div class="alert alert-danger" role="alert">Invalid email format.</div>';
    exit;
  }
  
  // Sanitize input
  $name = htmlspecialchars($name);
  $email = htmlspecialchars($email);
  $message = htmlspecialchars($message);
  
  // Send email
  $to = "your-email@example.com";
  $subject = "New contact form submission";
  $body = "Name: $name\nEmail: $email\n\n$message";
  $headers = "From: $email";
  
  if (mail($to, $subject, $body, $headers)) {
    echo '<div class="alert alert-success" role="alert">Thank you for your message!</div>';
  } else {
    echo '<div class="alert alert-danger" role="alert">Sorry, there was a problem sending your message.</div>';
  }
}
?>
